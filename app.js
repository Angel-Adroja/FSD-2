const express=require('express')
const app=express()
app.set("view engine","ejs")
app.get("/",(req,res)=>{
    res.render('first',{name:"Rahul"})
})
app.listen(1002)