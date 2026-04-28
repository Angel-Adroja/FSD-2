const express=require("express")
const router=express.Router()
const data=[
    {id:101,name:'ABC',branch:'CE',city:'Ahmd'},
    {id:102,name:'ABC',branch:'CE',city:'Ahmd'},
    {id:103,name:'ABC',branch:'CE',city:'Ahmd'},
    {id:104,name:'ABC',branch:'CE',city:'Ahmd'}
]
router.get("/",(req,res)=>{
    res.set("content-type","text/html")
    for(i of data){
        res.write("<h1>ID:"+i.id+"name: "+i.name+"branch: "+i.branch+"</h1>")
    }
    res.send()
})
router.get("/:id",(req,res)=>{
    var cur =data.filter((i1)=>i1.id===req.params.id)
    if(cur.length>0){
        res.send(cur)
    }
    else{
        res.send("Not Found")
    }
})
module.exports=router