import express, { Express } from 'express'

import setupRoutes from './routes'
import setupSwagger from './swagger'
import setupMiddlewares from './middlewares'
import env from '@/config/env'

function defaultRoutes(app: Express) {
  app.get('/healthcheck', async (_req, response) => {
    return response.status(200).json({
      version: env.appVersion
    })
  })

  app.get('/', async (_req, respose) => {
    return respose.status(200).json({
      version: env.appVersion
    })
  })
}

export const setupServer = async (): Promise<Express> => {
  const app = express()

  setupSwagger(app)
  setupMiddlewares(app)
  defaultRoutes(app)

  const router = express.Router()
  setupRoutes(router)

  app.use('/api', router)

  return app
}
