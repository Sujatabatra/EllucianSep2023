var fs=require("node:fs")

var fileContents=fs.readFileSync("readMe.txt","utf-8");
console.log(fileContents);

console.log("Waiting for my turn to get executed");
console.log("Good Bye");