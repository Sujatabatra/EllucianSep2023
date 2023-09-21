const net =require("node:net");

const host="127.0.0.1";
const port=5000;

const client=net.createConnection(port,host,()=>{
    console.log("Cnnected");
    client.write("Hello From CLient...sending server the data");
});

client.on("data",(data)=>{
    console.log(`Received from Server : ${data}`);
});

client.on("error",(error)=>{
    console.log(`Error : ${error.message}`);
});

client.on("close",()=>{
    console.log("Connected Closed");
});
