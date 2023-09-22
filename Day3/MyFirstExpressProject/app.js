const express=require("express")

const app=express();

app.get("/",(request,response)=>{
    response.send("Hello from the world of Express JS Application!");
})

app.get("/home",(request,response)=>{
    response.sendFile(__dirname+"/index.html");
})

app.get("/contact",(request,response)=>{
    response.send("Hello from contact Page!");
})
app.listen(3000);

console.log("Application listening at port 3000");