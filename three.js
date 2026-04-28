// 1) create 1 html file which conatins two number type input fields, 1 drop down which contains option select,add,sub,mul,div. 2)input field must conatian value greter than 0 else it will give msg please enter valid number also user must select any 1 of the formula else give msg "you have not selected any formula"(msg will be displayed on "/calc" page).3)if one formula is selected and  numbers are entered then respective calculation will be perform on /calc page. use http get method


var express= require('express')
var app=express();

app.use(express.static(__dirname))

app.get('/calc',(req,res)=>{
    res.set("content-type","text/html")
    var n1=parseInt(req.query.n1)
    var n2=parseInt(req.query.n2)
    
    if (n1>0 && n2>0){
        if(req.query.formula=='add'){
            a=n1+n2
            res.write(a)
        }
        else if(req.query.formula=='sub'){
            a=n1-n2
             res.write(a)
        }
        else if(req.query.formula=='mul'){
            a=n1*n2
             res.write(a)
        }
        else if (req.query.formula=='div'){
            a=n1/n2
             res.write(a)
        }
    
      else{
            res.write("please enter valid selection")
        }
    }
        else{
            res.write("please enter valid no")
        }
        res.send()
    
})

app.listen(3001)
