var http=require("http")
http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'test/html'})
    res.write(req.url+"<br>")
})
.listen(5000,()=>{
    console.log("server is running at http://localhost:5000")
})