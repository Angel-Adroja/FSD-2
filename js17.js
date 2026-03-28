// create a folder named "abc" 2) create a file it named xyz.txt and enter data into it.3)append data to that file and print msg "data appended successfully " read the data from thies file and print msg on console.copy the containt from xyz.txt to pqr.txt. delete the file xyz.txt and lastely print all operation perform . do all the operation using sync fs module 


const eventemiter=require("events")
const ee=new eventemiter()
var fs=require("fs")


//fs.mkdirSync("abc")
ee.on("write",function(){
    fs.writeFileSync("xyz.txt","Hello",(err)=>{
        if(err) throw err;
        console.log("File created")
        ee.emit("append")
    })
})

 ee.on("append",function()
        {
        fs.appendFileSync("abc/xyz.txt","Hieee",(err)=>{
        if(err) throw err;
        console.log("File append")
        ee.emit("copy")
    })
})

ee.on("copy",function()
        {
        fs.copyFileSync("abc/xyz.txt",(err)=>{
        if(err) throw err;
        console.log("File copy success")
        ee.emit("read")
    })
})

ee.on("read",function()
        {
        fs.readFileSync("abc/xyz.txt",(err,data)=>{
        if(err) throw err;
        console.log("File read")
        
    })
})


ee.emit("write")