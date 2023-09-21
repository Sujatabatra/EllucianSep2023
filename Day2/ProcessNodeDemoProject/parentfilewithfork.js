/*
fork : is a special instance of spawn that runs a new instance of the V8 engine . 
Which actually means we are creating multiple workers running on the same Node code base for different tasks. 

*/

const fs=require("node:fs");
const child_process=require('child_process');


for(var i=0;i<3;i++){
    var workerProcess=child_process.fork('childfile.js',[i]);
    
    // workerProcess.stdout.on('data',function(data){
    //     console.log("stdout:"+data);
    // });   
    // workerProcess.stderr.on("data",(data)=>{
    //     console.log(`strerr: ${data}`);
    // });

    workerProcess.on("close",(code)=>{
        console.log(`child process exited with code ${code}`);
    });
}