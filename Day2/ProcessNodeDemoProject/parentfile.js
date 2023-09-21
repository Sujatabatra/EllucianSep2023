const fs=require("node:fs");
const child_process=require('child_process');

for(var i=0;i<3;i++){
    var workProcess=child_process.exec('node childfile.js'+i,
    (error,stdout,stderr)=>{
        if(error){
            console.log(error.stack);
            console.log(`Error Code : ${error.code}`);
            console.log(`Signal Received ${error.signal}`);
        }
        console.log(`stdout : ${stdout}`);
        console.log(`stderr : ${stderr}`);
    })
    workProcess.on("exit",(code)=>{
        console.log(`Child process exited with exit code ${code}`);
    })
}