var express= require('express')
var app=express();
app.get('/',function(req,res){
    //res.set("content-type","text/plain")
    res.send("<h2>Hello</h2>")
    //res.write("hieee")
    //res.send()
    app.get("/about",(req,res)=>{
    res.set("content-type","text/HTML")
    res.write("<h2>Hello</h2>")
    res.end()
    })
    
})
app.listen(5000);


