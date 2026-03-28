// write node js script to copy containt of one file to anoter file. data should be fatched from 
//sourceMapsEnabled.txt and insertd to destination.txt and read data from destination file at the end. perform all the task has a asynch programming

var fs=require("fs")
fs.writeFile("source.txt","raw data",(err)=>{
    if(err) throw err;
    console.log("source file created")

fs.copyFile("source.txt","destination.txt",(err)=>{
    if(err) throw err;
    console.log("copy success")

fs.readFile("destination.txt","utf-8",(err,data)=>{
    if(err) throw err;
    console.log("destination file content")
    console.log(data)

})
})
})