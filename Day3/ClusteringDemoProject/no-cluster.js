/*
Node is single threaded
No matter how many core we have, node only uses a single core of you CPU
This is fine for I/O operation but if the code has long running and CPU intensive operations , our application might struggle from a performance point of view.

to run pm2 is you don;t have permission
1. open powershell in adminstrative mode
and run : Set-ExecutionPolicy -ExecutionPolicy RemoteSigned
*/

const http=require("node:http");
const OS=require("node:os");

console.log(OS.cpus.length);

const server=http.createServer((req,res)=>{
    if(req.url==="/"){
        res.writeHead(200,{"Content-Type":"text/plain"});
        res.end("Home Page");
    }
    else if(req.url==="/slow-page"){
        for(let i=0;i<6000000000;i++){}

        res.writeHead(200,{"Content-Type":"text/plain"});
        res.end("Slow Page");
    }
})

server.listen(8084,()=>{
    console.log("Server is running on port 8084");
});