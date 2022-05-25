import fastify from 'fastify'
import mercurius from 'mercurius'
import { applyMiddleware } from 'graphql-middleware'
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

  app
    .listen(process.env.PORT || 3000, '0.0.0.0')
    .then(() =>
      console.log(
        `🚀 Server ready at https://sandbox.apollo.dev/?endpoint=${process.env.API_URL}/graphql`,
      ),
    )
    .catch((err) => {
      console.log(err)
    })
}

start()
