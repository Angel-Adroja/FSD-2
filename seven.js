//create html file which contains fields fname,lname,pass,sunmit.2)once form submited,store all the entered values to the respectiv cookies on "/next" to page.3)and redirect user to "/admin" page and clear cookies set for lname. display remaining set cookies value on the page use pst method 

var express= require('express')
var app=express();

var cp=require('cookie-parser')
app.use(cp())

app.use(express.urlencoded({extended:true})) //forpost

app.use(express.static(__dirname,{index:"seven.html"}))//middleware

app.post("/next",(req,res)=>{
    res.cookie("first",req.body.fname)
    res.cookie("last",req.body.lname)
    res.cookie("pass",req.body.pass)
    res.redirect("/admin")
})
app.get("/admin",(req,res)=>{
    res.clearCookie("last")
     res.write("welcome"+req.cookies.first)
    res.write("your pass"+req.cookies.pass)
    res.send()
})
app.listen(5002)


