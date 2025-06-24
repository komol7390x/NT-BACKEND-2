const {createServer}=require('node:http');
const fs=require('node:fs');
const path=require('node:path');
const { log } = require('node:console');

const PORT=3001
const server=createServer((req,res)=>{
    const method=req.method;
    const url=req.url;
    console.log(method,url);
    res.end('ISHLADI')
    
})

server.listen(PORT,()=>console.log(`${PORT} ishlamoqda`))