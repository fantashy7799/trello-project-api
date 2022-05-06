import express from 'express'
import { mapOrder } from './utilities/sorts.js'

const app = express()

const hostname = 'localhost'
const port = 7799

app.get('/',(req, res) => {
    res.end('<h1>hello world</h1><hr/>')
})

app.listen(port, hostname, () => {
    console.log('hello, im running at $(hostname):$(port)/')
})