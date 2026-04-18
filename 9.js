// write a js script to perform the task as asked below 
// 1)add one form which conatins userId,pass and submit button.data should be submited by http post method.2)on home page form should be displayed and while submiting the form ,on next page "/login",if user name is admin then it will display welcome admin else display "please login with admin name" in red color

var express= require('express')
var app=express();

app.use(express.urlencoded({extended:true}))


app.get('/',(req,res)=>{
    res.send(`<html><body>
        <form action="/login" method='post'>
        <input type="text" name="uname"/>
        <input type="password" name="pass">
        <input type="submit" value ="Submit">
        </form></body></html>`)

      app.post("/login",(req,res)=>{
         if(req.body.uname=="admin"){
            res.write("welcome:"+req.body.uname)
         }
         else{
            res.set("content-type","text/html")
            res.write("<h2 style='color:red'> please login with admin name</h2>")
         }
         res.send()
      }) 
})
app.listen(8003)