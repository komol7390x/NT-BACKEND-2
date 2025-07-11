import express from 'express';
import {config} from 'dotenv'
// import userRouters from './routers/server18.route.js'
import {connectDB} from './database/server18.database.js'
config()
await connectDB()

const server=express();
const PORT=+process.env.PORT

server.use(express.json());
// server.use('/',userRouters)

server.listen(PORT,()=>console.log(`Server is running:`,PORT))