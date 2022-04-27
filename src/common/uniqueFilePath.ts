import path from 'path'
import fs from 'fs'
export const uniqueFilePath = async (filePath, fileName, index = 0) => {
  const pathParsed = path.parse(fileName)
  let ext = pathParsed.ext
  let fileNameWithoutExt = `${pathParsed.dir}/${pathParsed.name}`
  let fullFileName = index ? `${fileNameWithoutExt}-${index}${ext}` : fileName

  if (!fs.existsSync(filePath + '/' + fullFileName)) {
    return fullFileName
  }

  return await uniqueFilePath(filePath, fileName, index + 1)
}
