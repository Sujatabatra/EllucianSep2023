/*
Character Set : predefined list of characters to represent charater
e.g : ASCII, Unicode etc

Character Encoding : dictates how to represent a number in a character set as  binary data before it can be store in a computer.
e.g : utf-8
*/
const fs=require("node:fs");

//Blocking Read
var fileContents=fs.readFileSync("readMe.txt","utf-8");


//Blocking Write
fs.writeFileSync("writeMe.txt",fileContents);

console.log("File Created");

console.log("Waiting for my turn to get executed");
console.log("Good Bye");

