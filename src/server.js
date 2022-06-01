import express from 'express'
import cors from 'cors'
import { corsOptions } from '*/config/cors'
import { connectDB } from '*/config/mongodb'
import { env } from '*/config/evirontment'
import { apiV1 } from '*/routes/v1'

const hostname = env.APP_HOST
const port = env.APP_PORT

connectDB()
  .then(() => console.log('Connected succesfully'))
  .then(() => bootServer())
  .catch( error => {
    console.error(error)
    process.exit(1)
  })

const bootServer = () => {
  const app = express()


  app.use(cors(corsOptions))

  // Enable req.body date
  app.use(express.json())

  // Use APIs v1
  app.use('/v1', apiV1)

  app.listen(port, hostname, () => {
    console.log('hello, im running at $(hostname):$(port)/')
  })
}