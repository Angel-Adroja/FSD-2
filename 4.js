var express= require('express')
var app=express();
app.get('/user/:id',function(req,res){
    const userID=req.params.id;
    res.send("showing profile for user:"+userID)
})
app.listen(5008)