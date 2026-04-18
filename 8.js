// CREATE A WEB SERVER THAT,1)ACCEPT A GET REQUEST WITH DYNAMIC USER ID IN THE URL 
// 2) ALSO ACCEPT ADDITIONAL DATA (NAME,AGE) USING QUERY PARAMETERS.
// 3)EXTRECTID FROM ROUT PARA AND NAME ,AGE FROM QUERYSTRING.
// 4)RETURN A JSON RESPONSE CONTAING RECIVE ALL RECIEVING DATA

var express= require('express')
var app=express();

app.get("/user/:id",(req,res)=>{
    const userId=req.params.id;
    const name=req.query.name;
    const age=req.query.age;
    res.json({
        message:"data recieved",
        params:{id:userId},
        query:{name,age}
    })
})
app.listen(8001)
