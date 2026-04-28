// devlope a web applicaton using express and ejs tht allows to user enter a stuent name and mark true of form.after submision,the application should display the entered details and determine the result,if the mark are 40 and above,show pass in green color otherwise display Fail red color

var express= require('express')
var app=express();

app.set('view engine','ejs')
const path=require("path")
app.set("views",path.join(__dirname))
app.use(express.urlencoded({extended:true}))
app.get("/",(req,res)=>{
    res.render("form")
})
app.post("/submit",(req,res)=>{
    const name=req.body.name;
    const marks=req.body.marks;
    res.render('result',{name,marks})
})
app.listen(1003)

// named contect.ejs get display heading contect form with text input from name email input from email and submit button.render this ejs file on.rout2)render form submission usig the postmethod on the /submit rout 3)after form submission dispay msg on the browser msg.ejs file