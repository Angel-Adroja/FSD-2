// write node js script to write an array of object with properties name and age in file name student.txt . then read the file and display the object on console

var ps=require("fs")
let student=[{"name":"abc","marks":80},
              {"name":"rahul","marks":67},
               {"name":"xyz","marks":75}
            ]
ps.writeFile("s3.txt",JSON.stringify(student),(err)=>{
    if(err) throw err;
    console.log("s3 file created")
ps.readFile("s3.js","utf-8",(err,data)=>{
    if(err) throw err;
    d=JSON.parse(data)
    console.log(d)

}) 
})

