// write a node js script to write the text you are creating file to help.txt . after that append the text "you are appending the data" to the same file. after that read the file and print containt on console after finishing read operation print the line thanks for using program using async

var fs=require("fs")
fs.writeFile("help.txt","hello ",(err)=>{
    if(err) throw err;
    console.log("help file created")

fs.readFile("help.txt","utf-8",(err,data)=>{
        if(err) throw err;
        console.log("help file read")
fs.appendFile("help.txt","you are appending the data",(err)=>{
    if(err) throw err;
    console.log("help file appenend")

fs.readFile("help.txt","utf-8",(err,data)=>{
        if(err) throw err;
        console.log("append help file read")
    
})
})
})
})

