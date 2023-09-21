const fs=require("node:fs");

var readStream=fs.createReadStream("readMe.txt",{encoding:"utf-8",highWaterMark:10});

readStream.on("data",(chunk)=>{
    console.log("===============");
    console.log("New Chunk Received");
    console.log("===========")
    console.log(chunk);
})

console.log("Good Bye");