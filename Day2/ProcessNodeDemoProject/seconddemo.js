/*
node.js child process module provides the ability yo spawn child processes 

Different ways to create child process
1. child_process.exec() : runs a command in console and buffers the output
*/
const exec=require('child_process').exec;

exec('my.bat',(err,stdout,stderr)=>{
    if(err){
        console.error(err);
        return;
    }
    console.log(stdout);
})