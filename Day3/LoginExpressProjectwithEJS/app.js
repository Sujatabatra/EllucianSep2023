const express=require("express");

const app=express();
app.set("view engine","ejs");

app.get("/",(request,response)=>{
    response.render("index")
}
)

app.get("/login",(request,response)=>{
    var data=request.query;
    // console.log(data);
    var msg="";
    if(data.username===data.pwd){
        // response.send("Login Successful ,Welcome "+data.username);
        // response.render("sucess",{uname:data.username});
        msg="Login Successful!"; 
    }   
    else{
        msg="Login Failed";
        // response.render("failure",{uname:data.username});
        // response.send("Login Failed");
    }
    response.render("result",{uname:data.username,message:msg});
})

app.listen(3000);
console.log("Application is listening on port 3000");