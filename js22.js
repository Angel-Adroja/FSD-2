// ch 3
var http=require("http")
const { json } = require("stream/consumers")
http.createServer(function(reg,res){
    //res.writeHead(200,{'content-type':'text/html'})
    res.writeHead(200,{'content-type':'application/json'})
    const data={
        subject:"FSD-2",
        lecture:4
    }
    res.end(JSON.stringify(data))
})
.listen(5000,()=>{
    console.log("server is running at http://localhost:5000")
})