import fastify from 'fastify'
import mercurius from 'mercurius'
import { applyMiddleware } from 'graphql-middleware'
import { networkInterfaces } from 'os'
import { schema as mainSchema } from './schema'
import { createContext } from './context'
import {
  prismaSelect,
  auth /* , subscriptionsMiddleware */,
  resolverMiddlewares,
} from './middlewares'

const schemaWithMiddlewares = applyMiddleware(
  mainSchema,
  auth,
  prismaSelect,
  resolverMiddlewares,
  // subscriptionsMiddleware,
  // add_middlewares
)
const app = fastify()

async function start() {
  app.register(async (fas) => {
    fas.setErrorHandler(async (err) => {
      console.log(err.message)
      throw new Error('server error')
    })
  })

  app.register(require('@fastify/cors'), {
    origin: true,
    credentials: true,
  })
  app.register(require('@fastify/cookie'))
  app.register(require('@fastify/multipart'))

  app.register(require('./files'))

  app.register(mercurius, {
    schema: schemaWithMiddlewares,
    context: createContext,
    graphiql: true,
    /*  subscription: {
      context: (_, req) => {
        return createContext(req)
      },
    }, */
    allowBatchedQueries: true,
  })

  await app.ready()
  const interfaces = networkInterfaces()
  app
    .listen({ port: parseInt(process.env.PORT) || 3000, host: '0.0.0.0' })
    .then(() => {
      console.log(`🚀 API ready at:`)
      for (const key in interfaces) {
        if (Object.prototype.hasOwnProperty.call(interfaces, key)) {
          const address = interfaces[key].find((i) => i.family === 'IPv4').address || interfaces[key][0].address
          console.log(
            `http://${address}:${
              process.env.PORT || 3000
            }/graphql`,
          )
        }
      }
      console.log('')
      console.log(`🚀 API graphql explorer ready at:`)
      for (const key in interfaces) {
        if (Object.prototype.hasOwnProperty.call(interfaces, key)) {
          const address = interfaces[key].find((i) => i.family === 'IPv4').address || interfaces[key][0].address
          console.log(
            `http://${address}:${
              process.env.PORT || 3000
            }/graphiql`,
          )
        }
      }
    })
    .catch((err) => {
      console.log(err)
    })
}

start()
