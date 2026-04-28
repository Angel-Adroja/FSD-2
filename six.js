var express= require('express')
var app=express();

var cp=require('cookie-parser')
app.use(cp())
app.get("/",(req,res)=>{
    res.cookie('name','ExpressJs')
    res.cookie('fname','Js')
    res.cookie('Id','2',{expires:new Date(Date.now()+10000)})
    res.cookie('email','e@gmail.com',{maxAge:2000})
    res.send(req.cookies)
})
app.listen(5001)