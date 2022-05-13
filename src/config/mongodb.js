import { MongoClient } from "mongodb";
import { env } from "*/config/evirontment"

//require('dotenv').config()

const uri = env.MONGODB_URI

export const connectDB = async () => {

  const client = new MongoClient(uri, {
    useUnifiedTopology: true,
    useNewUrlParser:  true
  })

  try {
    //Connect the client to the server
    await client.connect()

    //list databases
    await listDatabases(client)

    console.log('connected succesfully to server!')

  } finally {
    //Ensure that the client will close when finish/error
    await client.close()
  }
}

const listDatabases = async (client) => {
  const databasesList = await client.db().admin().listDatabases()
  console.log(databasesList)
  console.log('Your databases:')
  databasesList.databases.forEach(db => console.log(' - ${db.name}'))
}