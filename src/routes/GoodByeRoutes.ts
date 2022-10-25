import express, { Request, Response } from 'express'
import { ByeController } from '../controller/ByeController'
import { logInfo } from '.././utils/logger'

// Router from express
const ByeRouter = express.Router()

// http://localhost:4000/api/hello?name=Martin/
ByeRouter.route('/')
  .get(async (req:Request, res:Response) => {
    // Obtener Query Param
    const name: any = req?.query?.name
    const tiempoTranscurrido: number = Date.now()
    const hoy: Date = new Date(tiempoTranscurrido)
    const date: string = hoy.toLocaleDateString()
    logInfo(`Query Param: ${name}`)
    // Controller instance execute method
    const controller: ByeController = new ByeController()
    // Obtain response.
    const response = await controller.getMessage(date, name)
    // Send to the client the response
    return res.send(response)
  })

export default ByeRouter
