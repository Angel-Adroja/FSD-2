//write express js script to request server to display json object on browser 
var express= require('express')
var app=express();
student={name:"FSD",
    lec:3
}
app.get("/",(req,res)=>{
    //res.set("content-type","application/json")
    res.json(student)
    //res.end()
    })
app.listen(5007)