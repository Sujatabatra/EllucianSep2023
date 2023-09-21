const fs=require("node:fs");

const readStream=fs.createReadStream("readMe.txt","utf-8");

const writeStream=fs.createWriteStream("writeMe.txt");

// readStream.on("data",(chunk)=>{
//     writeStream.write(chunk);
//     console.log("Chunk Written in file");
// })

readStream.pipe(writeStream);

console.log("Good Bye");