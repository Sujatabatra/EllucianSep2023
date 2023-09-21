/*
exec : returns a buffer from the child process. 
The default buffer size if 200K, it is asynchronouse,
but it waits for the child process to end and tries to return all the buffered data at once.
if we return data from the child process is greater that 200K then we will get maxBuffer exceeded.
*/

const fs=require("node:fs");
const child_process=require('child_process');


for(var i=0;i<3;i++){
    var workerProcess=child_process.exec('node childfile.js '+i,
    (error,stdout,stderr)=>{
        if(error){
            console.log(error.stack);
            console.log(`Error Code : ${error.code}`);
            console.log(`Signal Received ${error.signal}`);
        }
        console.log(`stdout : ${stdout}`);
        console.log(`stderr : ${stderr}`);
    })
    workerProcess.on("exit",(code)=>{
        console.log(`Child process exited with exit code ${code}`);
    })
}