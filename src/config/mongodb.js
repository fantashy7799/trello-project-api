import { MongoClient } from 'mongodb'
import { env } from '*/config/evirontment'

let dbInstance = null

//require('dotenv').config()

const uri = env.MONGODB_URI

export const connectDB = async () => {

  const client = new MongoClient(uri, {
    useUnifiedTopology: true,
    useNewUrlParser:  true
  })

  //Connect the client to the server
  await client.connect()

  // Assign clientDB to our dbInstance
  dbInstance = client.db(env.DATABASE_NAME)

}

// Get Database Instance
export const getDB = () => {
  if (!dbInstance) throw new Error('Must connect to Database first')
  return dbInstance
}