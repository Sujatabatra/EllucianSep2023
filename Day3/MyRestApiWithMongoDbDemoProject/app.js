var express=require("express");
var mongoose=require("mongoose");
var bodyParser=require("body-parser");

var app=express();

mongoose.connect("mongodb://localhost:27017/mydb");

const productSchema=mongoose.Schema({
    id:Number,
    name:String,
    price:Number,
    quantity:Number,
    category:String
});

const Product=mongoose.model("products",productSchema);

app.use(bodyParser.json());

app.get("/items",async (request,response)=>{
    let data=await Product.find();
    response.send(data);
});

app.get("/items/:itemNo",async (request,response)=>{
    var itemNum=parseInt(request.params.itemNo);
    let data=await Product.find({"itemId":itemNum});
    response.send(data);
    
});

app.post("/items",async (request,response)=>{
    let data=new Product(request.body);
    const result=await data.save();
    response.send(result);
})

app.listen(3000);
console.log("Application is listening at port 3000");