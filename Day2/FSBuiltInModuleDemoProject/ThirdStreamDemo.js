const fs=require("node:fs");

/*
events
1. data : this event is fired when there is a data availabke to read
2. end : this event is fired when there is no data available to read
3. error : this event is fired when there is an error receiving or writing data
4. finish : this event is fired when all data has been flushed to underlying system
*/
const readStream=fs.createReadStream("readMe.txt",{highWaterMark:10});

readStream.setEncoding("utf-8");


var data='';
var lineNo=1;

readStream.on("data",(chunk)=>{
    // console.log(chunk);
    data+=lineNo++ +' '+chunk.toUpperCase()+"\n";
})

readStream.on('end',()=>{
    console.log(data);
});

readStream.on("error",(err)=>{
    console.log(err.stack);
});

console.log("Good Bye");