const express=require("express");

const app=express();

app.get("/",(request,response)=>{
    response.sendFile(__dirname+"/index.html")
}
)

app.get("/login",(request,response)=>{
    var data=request.query;
    // console.log(data);

    if(data.username===data.pwd)
        // response.send("Login Successful ,Welcome "+data.username);
        response.sendFile(__dirname+"/sucess.html");
    else
        response.sendFile(__dirname+"/failure.html")
        // response.send("Login Failed");
})

app.listen(3000);
console.log("Application is listening on port 3000");