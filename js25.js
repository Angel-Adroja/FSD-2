// write node js program to load a simple html file from your directory and prints its containt as html containt 

var http=require("http")
var url=require('url')
var fs =require("fs")
http.createServer(function(req,res){
    var q=url.parse(req.url,true)
    fs.readFile("."+q.pathname,function(err,data){
        if(err){
            res.writeHead(404,{'content-type':'text/plain'})
            res.end("page not found")
        }
        else{
            res.writeHead(200,{'content-type':'text/html'})
            res.end(data)
        }
    })
}).listen(5022)

