var fs=require("fs")
fs.writeFile("source1.txt","raw data",(err)=>{
    if(err) throw err;
    console.log("source1 file created")

r1=fs.readFile("source1.txt","utf-8",(err,data)=>{
    if(err) throw err;
    console.log("source file read")
    
fs.writeFile("destination1.txt",data,(err)=>{
    if(err) throw err;
    console.log("destination1 file created")    

fs.readFile("destination1.txt","utf-8",(err,data)=>{
    if(err) throw err;
    console.log("destination1 file read")
    console.log(data)

})    
})    
})
})

