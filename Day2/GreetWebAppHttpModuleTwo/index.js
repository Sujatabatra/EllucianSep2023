const http=require("node:http");
const fs=require("node:fs");
const url=require("node:url");

const server=http.createServer((request,response)=>{

   if(request.url==="/"){
    response.writeHead(200,{"Content-type":"text/html"});
    fs.createReadStream("./first.html").pipe(response);
   }
   else if(request.url.match("/greet[^]*")){ 
    
    //reading data from HTTP Get Method
    var url_parts=url.parse(request.url,true);
    var query=url_parts.query;
    
    response.writeHead(200,{"Content-type":"text/html"});
    
    let html=fs.readFileSync("./output.html","utf-8");

    html=html.replace("{{name}}",query.username);
    
    response.end(html);
   }
    
});

server.listen(8082,"127.0.0.1");
console.log("Server is listening on the port 8082");
