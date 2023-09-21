const fs=require("node:fs");

// fs.unlinkSync("write.txt");
// console.log("File Deleted");

// fs.unlink("writeMe.txt",()=>{
//     console.log("File Deleted");
// })

// fs.mkdirSync("demodir");
// fs.rmdirSync("demodir");

fs.mkdir("demodir",()=>{
    console.log("Folder Created");
    fs.readFile("./readMe.txt",(err,data)=>{
        // console.log(`error : ${err}`);
        fs.writeFile("./demodir/writeMe.txt",data,()=>{
            console.log("File created");
        });
    })
})

// fs.rmdir("demodir",(err)=>{
//     console.log(`error : ${err}`)
// });

fs.unlink("./demodir/writeMe.txt",()=>{
    fs.rmdir("demodir",(err)=>{
        console.log(`error : ${err} and folder deleted`);
    });     
    })

console.log("Not Waiting for folder and files to be created");
console.log("Good Bye");

