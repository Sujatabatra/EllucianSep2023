const http=require("node:http");
const fs=require("node:fs");

const server=http.createServer((request,response)=>{

    // response.writeHead(200,{'Content-Type':'text/plain'});
    // response.end("Hello from Node App");

    response.writeHead(200,{'Content-Type':'text/html'});
    const readStream=fs.createReadStream("./first.html","utf-8");
    
    readStream.pipe(response);
    
});

server.listen(8082,"127.0.0.1");
console.log("Server is listening on the port 8082");
