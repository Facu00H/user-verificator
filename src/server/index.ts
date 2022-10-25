import express, { Express, Request, Response} from 'express'

// environment variables
import dotenv from 'dotenv'

// Security
import cors from 'cors'
import helmet from 'helmet'

// TODO HTTPS

//Routes router
import routes from '../routes'

// Configurar dotenv
dotenv.config()

// Create Express app
const app: Express = express()

// Define APP to use "/api" and use rootrouter from 'index.ts' in router
app.use('/api', routes)

// TODO mongoose Connection

// Security config
app.use(helmet())
app.use(cors())

// Content type Config.

app.use(express.urlencoded({ extended: true, limit: '50mb' }))
app.use(express.json({ limit: '50mb' }))

// http://localhost:4000/ --> http://localhost:4000/api
// Redirections Config
app.get('/', (req: Request, res: Response) => {
  res.redirect('/api')
})

export default app