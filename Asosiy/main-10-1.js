import { WebSocketServer } from "ws";
import {WebSocket} from 'ws'

const wss = new WebSocketServer({ port: 3003 });

wss.on('connection', function connection(ws) {
    console.log('New user connected');

    ws.on('message', function incoming(message) {
        // console.log(message.toString());
        wss.clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message.toString());
            }
        });
    });

    ws.send('Welcome to the chat');
});

console.log('server running');
