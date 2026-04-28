// write express js script to print msg in next line splitting by "." and use get method to submit the form data. two.html file contains form of text area forthe msg and submit button . 


var express= require('express')
var app=express();

app.use(express.static(__dirname,{index:"two.html"})) //middleware

app.get("/login",(req,res)=>{
    res.set("content-type","text/html")
    t1=(req.query.msg).split(".")
    for (i in t1){
        res.write(t1[i]+"<br>")
    }
        res.send()
})
app.listen(6006)
