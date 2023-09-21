/*
Node.js provides the ability to perfrom socket programming with net module.
net module contains the functionality to create both server and client.
*/

const net=require("node:net");

const port=5000;

const server=net.createServer((socket)=>{
    console.log("Client Connected");

    socket.on("data",(data)=>{
        const strData=data.toString();
        console.log(`Received : ${strData}`);

        socket.write("Thanks from Server for sending the data");
    });

    socket.on("end",()=>{
        console.log("Client Disconnected");
    });

    socket.on("error",(error)=>{
        console.log(`Socket Error : ${error.message}`);
    });
});

server.on("error",(error)=>{
    console.log(`Server Error : ${error.message}`);
});

server.listen(port,()=>{
    console.log("TCP socket server is running on port "+port);
});