const http=require("node:http");

const server=http.createServer((request,response)=>{

    // response.writeHead(200,{'Content-Type':'text/plain'});
    // response.end("Hello from Node App");

    response.writeHead(200,{'Content-Type':'text/html'});
    response.end("<h1>Hello from Node App</h1>");
});

server.listen(8082,"127.0.0.1");
console.log("Server is listening on the port 8082");
