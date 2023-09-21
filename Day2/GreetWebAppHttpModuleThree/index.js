const http=require("node:http");
const fs=require("node:fs");
const url=require("node:url");
const qs=require("node:querystring");


const server=http.createServer((request,response)=>{

   if(request.url==="/"){
    response.writeHead(200,{"Content-type":"text/html"});
    fs.createReadStream("./first.html").pipe(response);
   }
   else if(request.url==="/greet" && request.method=="POST"){ 
    
    //reading data from HTTP Get Method
    var body='';
    
    request.on("data",(data)=>{
      body+=data;
    });
    request.on("end",()=>{
      var data=qs.parse(body);
      
      response.writeHead(200,{"Content-type":"text/html"});
    
      let html=fs.readFileSync("./output.html","utf-8");

      html=html.replace("{{name}}",data.username);
    
      response.end(html);
   });

    
   }
    
});

server.listen(8082,"127.0.0.1");
console.log("Server is listening on the port 8082");
