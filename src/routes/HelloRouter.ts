import express,{ Request, Response } from "express"
import { HelloController } from '../controller/HelloControler'
import { logInfo } from ".././utils/logger"

// Router from express
let helloRouter = express.Router()

// http://localhost:4000/api/hello?name=Martin/
helloRouter.route('/')
  .get(async(req:Request, res:Response) => {
    // Obtener Query Param
    let name: any = req?.query?.name

    logInfo(`Query Param: ${name}`)
    // Controller instance execute method
    const controller: HelloController = new HelloController()
    // Obtain response.
    const response = await controller.getMessage(name)
    // Send to the client the response
    return res.send(response);
  })

export default helloRouter
