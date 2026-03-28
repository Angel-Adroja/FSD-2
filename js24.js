//1) create  1 page with 2 links home and about 2)both page must contains html type content and at require content.if user add any other url path,then he/she will be redirected to page and plain msg will be display(page not found)
var h=require('http')
var server=h.createServer(function(req,res){
    if(req.url=="/"){
        res.writeHead(200,{'content-type':'text/html'})
        res.write("<h1>Hello</h1>")
        res.end()
    }
    else if(req.url="/about"){
        res.writeHead(200,{'content-type':'text/html'})
        res.write("<h1>About page</h1>")
        res.end()
    }
    else{
        res.writeHead(404,{'content-type':'text/plain'})
        res.write("Page not found")
        res.end()
    }
})
server.listen(5001)


