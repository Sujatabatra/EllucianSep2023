const fs=require("node:fs");
/*
Buffer Default Size : 64KB
*/
//Non Blocking Read
fs.readFile("readMe.txt",{"encoding":"utf-8"},function(err,data){
    console.log(data);
});

console.log("Good Bye");
console.log("File Busy in getting read");
