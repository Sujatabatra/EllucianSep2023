const fs=require("node:fs");

fs.readFile("readMe.txt","utf8",function(err,data){
    fs.writeFile("write.txt",data,/*{flag:"a"},*/()=>{
        console.log("File Created");
    })
});

console.log("Good Bye");
console.log("Not sure about files reading and writing status");