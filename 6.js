var express= require('express')
var app=express();

app.get("/data",(req,res)=>{
    var name=req.query.name;
    var age=req.query.age;
    var dates=req.query;
    console.log(typeof name)
    console.log(typeof dates)
    res.write(JSON.stringify(dates))
    res.write(`Name:${name},Age:${age}`)
    res.send()
})
app.listen(504)