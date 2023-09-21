const fs=require("node:fs");

const data ="Welcome to the world of Streams";

const writeStream=fs.createWriteStream("Output.txt");

writeStream.write(data,"utf-8");

writeStream.end();

writeStream.on("finish",()=>{
    console.log("Write Completed");
});

writeStream.on("error",(err)=>{
    console.log(err.stack);
});

console.log("Good Bye");