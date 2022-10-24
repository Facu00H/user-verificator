import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'

// Configuration. the .env file
dotenv.config()

// Create Express app
const app: Express = express()
const port: number | string = process.env.PORT || 4000

// define the first route
app.get('/', (req: Request, res: Response) => {
  res.send('Welcomee')
})

app.get('/hello', (req: Request, res: Response) => {
  res.send('hello my broder')
})

// Execute APP listen request to port
app.listen(port, () => console.log(`EXPRESS SERVER runing http://localhost:${port}`))
