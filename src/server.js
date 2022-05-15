import express from 'express'
import { connectDB } from '*/config/mongodb'
import { env } from '*/config/evirontment'

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

  app.get('/test', async (req, res) => {
    res.end('<h1>hellooooo worlddddd</h1><hr/>')
  })

  app.listen(port, hostname, () => {
    console.log('hello, im running at $(hostname):$(port)/')
  })
}