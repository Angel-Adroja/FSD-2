// create index.html file which cotains unmae,pass,login button. aftter clicking submit button it should jump on save "/session" page . stote uname,pass in session page after saving session redirect to "/fetch"page and read value alon with logout link. jump on "/delete" page after clicking logout link and destroy session and redirect to home page 

var express= require('express')
var app=express();

app.use(express.static(__dirname,{index:"eight.html"}))//middleware


var es=require('express-session')
app.use(es({
    resave:true,
    saveUninitialized:true,
    secret:"123"
}))


app.get("/session",(req,res)=>{
    req.session.user=req.query.uname
    req.session.password=req.query.pass
    res.redirect("/fetch")
})
app.get("/fetch",(req,res)=>{
    res.set("content-type","text/html")

    res.write("Welcome: "+req.session.user)
    res.write("<a href='/delete'>Logout</a>")
    res.send()
})
app.get("/delete",(req,res)=>{
    req.session.destroy()
    res.redirect("/")
})
app.listen(5003)

// js script using session to display how many times a user visited a website .if user is visiting wesite for a first time welcome user else display numbers of count of visit 

