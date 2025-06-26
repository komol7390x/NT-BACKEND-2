const socket=new WebSocket('ws://localhost:3002');
socket.onopen=function(){
    console.log('Serverga ulandi');
    socket.send("Salom server");
}
socket.onmessage=(event)=>{
    console.log(event.data);
}
socket.onerror=(error)=>{
    console.log(error.type);
}