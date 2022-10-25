import dotenv from 'dotenv'
import app from './src/server'
import { logError, logSucces } from './src/utils/logger'

// Configurar dotenv
dotenv.config()

const port = process.env.PORT || 4000

// Execute app
app.listen(port, () => {
  logSucces(`[SERVER ON]: running in http://localhost:${port}/api`)
})

// Control server error
app.on('error', (err) => {
  logError(`[SERVER ERROR]: ${err}`)
})

