var express=require("express");
var fs=require("fs")
var bodyParser=require("body-parser");

var app=express();
app.use(bodyParser.json());

app.get("/items",function(request,response){
    var readStream=fs.createReadStream(__dirname+"/data.json","utf-8");
    readStream.pipe(response);
});

app.get("/items/:itemNo",(request,response)=>{
    console.log("inside")
    fs.readFile("data.json","utf-8",(err,data)=>{
        items=JSON.parse(data);
        for(i=0;i<items.length;i++){  
            if(items[i].itemId==request.params.itemNo){
                console.log(items[i]);
                response.send(JSON.stringify(items[i]));
            }

        }
    })
});

app.post("/items",function(request,response){
    var data=fs.readFileSync("data.json","utf-8");
    items=JSON.parse(data);
    var item=request.body;
    items.push(item);

    fs.writeFileSync("data.json",JSON.stringify(items));

    response.send(JSON.stringify(item));
})

app.listen(3000);
console.log("Application is listening at port 3000");