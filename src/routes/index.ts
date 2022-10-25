/**
 * Root Router
 * Redirections to Router
 */

import express, { Request, Response } from 'express'
import helloRouter from './HelloRouter'
import { logInfo } from '@/utils/logger'

// Server instance
let server = express()

// Router instance
let rootRouter = express.Router()

// Activate for request.
rootRouter.get('/', (req: Request, res: Response) => {
  logInfo('GET http://localhost:4000/api/')
  res.status(200).json({
    "data": {'message': 'Goodbye, world'}
  })
})

// Redirections to Routers & controllers.
server.use('/', rootRouter)  // http://localhost:4000/api/
server.use('/hello', helloRouter) // http://localhost:4000/api/hello

export default server