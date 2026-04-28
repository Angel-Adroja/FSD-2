// 1)create and html form that takes a number .one submission, i2)f input is empty , display"please enter number" or input is not a number ,display"invalid input".2)if number is ,display even numvber if it is given or display odd number it will print odd provide a link to go back and use http post method

var express= require('express')
var app=express();

app.use(express.static(__dirname,{index:"five.html"}))//middleware

app.use(express.urlencoded({extended:true})) //

app.post("/login",(req,res)=>{
    res.set("content-type","text/html")
    const num=req.body.num;
    if(!num)
        {
        res.send("please enter number <a href='/'> go back </a>")
    }
    if(isNaN(num)){
        res.send("enter value is not a number <a href='/'> go back </a>")
    }
    const number=Number(num)

    if(number%2==0){
        res.send("Even Number <a href='/'> go back </a>")
    }
    else{
        res.send("odd Number <a href='/'> go back </a>")
    }
      
})
app.listen(1025)