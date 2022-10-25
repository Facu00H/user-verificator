import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'

// Configuration. the .env file
dotenv.config()

// Create Express app
const app: Express = express()
const port: number | string = process.env.PORT || 4000

app.get('/hello', (req: Request, res: Response) => {
  if(req.query.name){
    res.status(200).json({
      "data": {'message': `Hola ${req.query.name}`}
    })
  }else{
    res.status(200).json({
      "data": {'message': `Hola anonimo`}
    })
  }
})



// Execute APP listen request to port
app.listen(port, () => console.log(`EXPRESS SERVER runing http://localhost:${port}`))
