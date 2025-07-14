import express from 'express';
import {config} from 'dotenv'

import routerUniversity from './routers/university.route.js'
import routerGroups from './routers/groups.route.js'
import {connectDB} from './database/database.connect.js'

config();
await connectDB()

const server=express();
server.use(express.json());

server.use('/university',routerUniversity)
server.use('/groups',routerGroups)

const PORT=+process.env.PORT
server.listen(PORT,()=>console.log('Server is runing:',PORT))
