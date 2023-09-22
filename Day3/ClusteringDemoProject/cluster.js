/*
1. cluster module enables the creation of child processes (also called workers) that run simultaneously
2. All created workers share the same server port

Master is only incharge of the workers

Workers are incharge of handling incoming requests, reading files etc.

Each worker gets its own memory and V8 instance

Why shoulnot we simply create large no. of worker using cluster.fork()
We should only create as many worker as there are CPU cores on the machine the app is running

if we crate more workeers than there are logical cores on the computer iy can cause an overhead as the system will have to schedule all the created workers with fewer number of cores.
*/

const cluster=require("node:cluster");
const http=require("node:http");

if(cluster.isMaster){
    console.log(`Master Process ${process.pid} is running`);
    cluster.fork();
    cluster.fork();
}
else{
    console.log(`Worker ${process.pid} started`);
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
    server.listen(8082,()=>{
        console.log("Server is running on port 8082");
    });
}

