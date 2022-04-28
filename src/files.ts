import { prisma } from './prisma'
import { uniqueFilePath } from './common/uniqueFilePath'
import sharp from 'sharp'
import { Readable } from 'stream'
import path from 'path'
import fs from 'fs'
import util from 'util'
import { pipeline } from 'stream'
const pump = util.promisify(pipeline)
import { getUserFromRequest } from './common/getUserFromRequest'

module.exports = function (fastify, opts, done) {
  fastify.post('/file', async (req, reply) => {
    // before_upload_checks
    const user = getUserFromRequest(req, reply)

    if (user.role !== 'ADMIN')
      throw reply.code(401).type('text/plain').send('permission denied!')
    // upload_permission_check_end

    const data = await req.file()
    if (!data || !data.file) throw new Error('No file to upload')
    const fileName = data.fields?.name?.value || data.filename
    const filePath = req.query?.path ? `${req.query.path}` : ''

    const uploadPath = 'public/' + filePath
    const uniqueFileName = await uniqueFilePath(uploadPath, fileName)
    let fileMeta
    if (Object.keys(data.fields).length > 4) {
      const keys = Object.keys(data.fields).filter(
        (key) => !['relativePath', 'name', 'type', 'file'].includes(key),
      )
      if (keys.length) {
        fileMeta = {}
        keys.forEach((key) => {
          fileMeta[key] = data.fields[key].value
        })
      } else {
        fileMeta = null
      }
    }
    try {
      if (!fs.existsSync(uploadPath)) {
        fs.mkdirSync(uploadPath, { recursive: true })
      }
      await pump(
        data.file,
        fs.createWriteStream(uploadPath + '/' + uniqueFileName),
      )
      return prisma.file.create({
        data: {
          name: fileName,
          mimeType: data.mimetype,
          path: filePath + '/' + uniqueFileName,
          size: data.file?.bytesRead || null,
          meta: fileMeta,
        },
      })
    } catch (e) {
      console.log(e)
      throw new Error('Upload failed!')
    }
  })

  fastify.get('/file/*', async (req, reply) => {
    if (!req.params['*'])
      throw reply.code(404).type('text/plain').send('Not found!')

    const filePath = 'public/' + req.params['*']
    const pathParsed = path.parse(filePath)
    const isImage = [
      '.png',
      '.jpg',
      '.jpeg',
      '.gif',
      '.bmp',
      '.svg',
      '.webp',
      '.tif',
      '.tiff',
    ].includes(pathParsed?.ext.toLowerCase())

    if ((req.query?.w || req.query?.h) && isImage) {
      const stream = await getImageSize(req, reply)
      reply.type('image/' + pathParsed?.ext.toLowerCase().substring(1))
      return reply.send(stream)
    }
    let stream
    if (fs.existsSync(filePath)) {
      stream = fs.createReadStream(filePath)
    }

    if (isImage) {
      reply.type('image/' + pathParsed?.ext.toLowerCase().substring(1))
    }
    reply.send(stream)
  })
  done()
}

async function getImageSize(req, reply) {
  const width = req.query?.w ? parseInt(req.query.w) : null
  const height = req.query?.h ? parseInt(req.query.h) : null
  const fit =
    req.query?.fit &&
    ['cover', 'contain', 'fill', 'inside', 'outside'].includes(req.query?.fit)
      ? req.query?.fit
      : null
  let filePath = `public/thumbnails/${req.params['*']}`
  if (width || height) {
    const thumbName =
      (width ? `w-${width}` : '') +
      (height ? `h-${height}` : '') +
      (fit ? `-${fit}` : '')
    filePath = `${filePath}/${thumbName}`
  }
  let stream
  if (fs.existsSync(filePath)) {
    stream = fs.createReadStream(filePath)
  } else {
    if (!fs.existsSync('public/thumbnails/' + req.params['*'])) {
      fs.mkdirSync('public/thumbnails/' + req.params['*'], { recursive: true })
    }
    if (fs.existsSync('public/' + req.params['*'])) {
      stream = fs.createReadStream('public/' + req.params['*'])
      let transform = sharp()
      const options = fit ? { fit } : undefined
      transform = transform.resize(width, height, options)
      const stream2 = stream.pipe(transform)
      stream2.pipe(fs.createWriteStream(filePath))
      return stream2
    } else {
      throw new Error('Image not found!')
    }
  }
  return stream
}
