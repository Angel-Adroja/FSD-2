// write a mode js script to handle events ro write a data in file , append data in file and then read the data from the file  and display it in console use events and asyn fs modules.

const eventemiter=require("events")
const ee=new eventemiter()
var fs=require("fs")

ee.on("write",function(){
    fs.writeFile("a.txt","Hello",(err)=>{
        if(err) throw err;
        console.log("File created")
        ee.emit("append")
    })
})
        ee.on("append",function()
        {
        fs.appendFile("a.txt","Hieee",(err)=>{
        if(err) throw err;
        console.log("File append")
        ee.emit("read")

    })
})

    ee.on("read",function()
        {
        fs.readFile("a.txt",(err,data)=>{
        if(err) throw err;
        console.log("File read")
    })
})
ee.emit("write")



