// design a node js applicatio using express js to satisfy following requirement 1)the first middle ware should display a msg "first function exicuted" 2) the second middle ware should display a msg"second function executed"3)themiddleware should perform a simple arithmetic operation and store result in request object,then display it in console. 4)apply all 3 middle ware fun in seq. to a single route "/class". final respond should be "Thank you" msg 

var express= require('express')
var app=express();

const addone=(req,res,next)=>{
    res.write("First fun executed")
    next()
}
const addtwo=(req,res,next)=>{
    res.write("second fun executed")
    next()
}
const addthree=(req,res,next)=>{
    req.total=50+40
    console.log(req.total)
    next()
}
app.get("/class",addone,addtwo,addthree,(req,res)=>{
    res.write("Thank you")
    res.end()
})
app.listen(8005)