const {createServer}=require('node:http');
const fs=require('node:fs');
const path=require('node:path');
const { log } = require('node:console');

const PORT=3001
const server=createServer((req,res)=>{
    const method=req.method;
    const url=req.url;
    // console.log(method,url);
    if(method=='POST'){
        if(url=='/resume'){
            let body='';
            req.on('data',(chunk)=>{
                body+=chunk.toString();
            })
            req.on('end',()=>{
                console.log(body.split("&"));
            })
            res.end('ISHLADI');
            return
        }
    }
    
    if(method=='GET'){

    }
})

server.listen(PORT,()=>console.log(`${PORT} ishlamoqda`))