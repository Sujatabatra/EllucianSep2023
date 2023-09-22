const express=require("express");
const bodyParser=require("body-parser");

var urlencodedParser=bodyParser.urlencoded({extended:false});

const app=express();
app.set("view engine","ejs");

app.use("/public",express.static('public'))

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

app.post("/login",urlencodedParser,function(request,response){
    var data=request.body;
    var msg="";
    if(data.username===data.pwd){
        msg="Login Successful!"; 
    }   
    else{
        msg="Login Failed";
    }
    response.render("result",{uname:data.username,message:msg});

})
app.listen(3000);
console.log("Application is listening on port 3000");