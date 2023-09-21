/*
spawn : starts sending back data from the child process in a stream as soon as child process starts executing.
When we run this command , it sends a system command that will run on its own process rather then executing code without our node process.
In this no new V8 instance will be created and only one copy of the node module will be active on the processor.
It is used when we want child process to return large amount of data to node. 

*/

const fs=require("node:fs");
const child_process=require('child_process');


for(var i=0;i<3;i++){
    var workerProcess=child_process.spawn('node', ['childfile.js',i]);
    
    workerProcess.stdout.on('data',function(data){
        console.log("stdout:"+data);
    });   
    workerProcess.stderr.on("data",(data)=>{
        console.log(`strerr: ${data}`);
    });

    workerProcess.on("close",(code)=>{
        console.log(`child process exited with code ${code}`);
    });
}