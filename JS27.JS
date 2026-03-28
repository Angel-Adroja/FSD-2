// CREATE HTTP WEB PAGE ON WHICH HOME PAGE DISPLAY WELCOME TO HOME PAGE IN BLUE COLOR AND FOT THE SIZE 32PX LOGIN PAGE SOURCE 1 HTML FILE FROM YOUR DIRECTORY.GALLRY PAGE REFLECTS 1 IMG FROM YOUR DIRECTORY AND ANY REQUEST SHOWS PAGE NOT FOUND MSG.

var http=require("http")
var url=require('url')
var fs =require("fs")
var h=require('http')
var server=h.createServer(function(req,res){
    if(req.url=="/"){
        res.writeHead(200,{'content-type':'text/html'})
        res.write("<h1>Hello</h1>")
        res.end()
    }
    else if(req.url=="/login"){
        data=fs.readFileSync("1.html","utf-8")
        res.writeHead(200,{'content-type':'text/html'})
        res.write(data)
        res.end()
    }

    else if(req.url=="/gallary"){
        data=fs.readFileSync("1.png")
        res.writeHead(200,{'content-type':'image/png'})
        res.write(data)
        res.end()
    }

    else{
        res.writeHead(404,{'content-type':'text/plain'})
        res.write("Page not found")
        res.end()
    }
})
server.listen(3001)