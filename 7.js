//create a basic web application that 1)display a form on the home page to enter users name.2)sents the form data to the server using a post request.3)theserver should read the submited name from request to body. 4)finally display a msg confirming the login.

var express= require('express')
var app=express();

app.use(express.urlencoded({extended:true}))
app.get('/',(req,res)=>{
    res.send(`<html><body><form action="/post" method='post'>
        <input type="text" name="uname"/>
        <button type="submit">Submit</button></form></body></html>`)
})
app.post("/post",(req,res)=>{
    const name=req.body.uname
    res.send("user name create:"+name)
})
app.listen(3503)