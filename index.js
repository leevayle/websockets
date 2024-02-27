const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 7758});

wss.on("connection", (ws)=>{
    console.log(`New user connected`);

    ws.on("message", data => {
        console.log(`Client said: ${data}`);

        ws.send(`Admin: Backend is looking good baby!`);
    });

    ws.on("close", ()=>{
        console.log("User disconnected");
    });
});

