// 1)create a middleware that logs msg indicating that student has entered the campus whenever request is 2) create a another middleware that check wether that student have id card if id card is valid,store the student name in request object and continous the proccess else stop the process with a msg "excess dinaied" create a get route"/student" that sends a welcome msg to the student using the name stored in request object.

var express= require('express')
var app=express();

const entrylog=(req,res,next)=>{
    console.log("student entered in campus")
    next()
}
const checkId=(req,res,next)=>{
    hasId=false;

if(hasId){
    req.name="Angel"
    console.log("ID varified")
    next()
}
else{
    res.send("Access Denied")
}
}
app.use("/student",entrylog,checkId)
app.get("/student",(req,res)=>{
    res.send("welcome:"+req.name)
})
app.listen(8005)

// create one html file one text file one text field for name email field and checkbox for subscription create html file in home page 2) on login page welcome user and email id data should be printed 3)if user checked the subscription then thankyou for the scubscription msg will be printed logout link will be displayed. if user clicks the logout links then redirected to home page if user has not obtainted the subscription then "you can subscribe" msg will be displayed and subscribe link will be displayed. if user click subscribe link then thank you msg with logout link will be displayed.