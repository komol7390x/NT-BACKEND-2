const WebSocket=require('ws');
const wss=new WebSocket.Server({port:3002,},()=>{
    console.log('Server is runing 3000');
})

wss.on('connection',(ws,req)=>{
    console.log('Client Ulandi');

    ws.on('message',(data)=>{
        console.log(data.toString());
    })

    ws.on('error',(err)=>{
        console.log(err);
    })

    ws.on('close',()=>{
        console.log('Client serverdan uzuldi!');
    });

    ws.send('salom Client');
})