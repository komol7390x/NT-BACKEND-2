const WebSocket=require('ws');
const wss=new WebSocket.Server({port:3002,},()=>{
    console.log('Server is runing 3000');
})