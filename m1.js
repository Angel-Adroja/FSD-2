const express=require('express')
const multer=require('multer')
const app=express()
app.use(express.static(__dirname,{index:"m1.html"}))
var store=multer.diskStorage({
    destination:"multiple",
    filename:function(req,file,cb){
        cb(null,file.fieldname+"-"+Date.now()+".docx")//make file name 
    }
})
var upload=multer({storage:store,limits:{fileSize:10*1024*1024}})
//var upload=multer({storage:store})

app.post("/upload",upload.array("mypic",5),(req,res)=>{
    const files =req.files
    if(files ){
        res.set("content-type","text/html")
       for (i of files){
        res.write("<h2>File"+i.originalname+"has beenuploaded</h2> ")
       }
       res.send()
    }
})
app.listen(2002)