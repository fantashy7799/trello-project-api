import express from 'express'
import { mapOrder } from '*/utilities/sorts.js'
import { connectDB } from '*/config/mongodb'
import { env } from '*/config/evirontment'

const app = express()

const hostname = env.HOST
const port = env.PORT

connectDB().catch(console.log)

app.get('/', (req, res) => {
    res.end('<h1>hellooooo worlddddd</h1><hr/>')
})

app.listen(port, hostname, () => {
    console.log('hello, im running at $(hostname):$(port)/')
})