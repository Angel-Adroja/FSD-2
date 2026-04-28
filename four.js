// 1)cretea login form using html with fields uname,pass,submit. on form submition,if uname=admin and pass=1234,then display login successfull otherwise display invalid credincial and provide link to go back use post method and submit data to /login .

var express= require('express')
var app=express();

app.use(express.static(__dirname,{index:"four.html"}))//middleware

app.use(express.urlencoded({extended:true})) //

app.post("/login",(req,res)=>
    {
    res.set("content-type","text/html")
    if(req.body.uname=="admin" && req.body.pass=="1234")
        {
        res.send("login success")
    }
    else{
        res.send("invalid uname or pass <a href='/'> go back </a>")
    }
      
})
app.listen(1023)