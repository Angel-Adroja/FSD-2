// write a node js script to print query string of url in file (fsd.txt) using es6  callback.

var u=require("url")
var fs=require("fs")
var addr="http://localhost:8080/default.html?year=2026&month=feb"
var q= u.parse(addr,false)
qdata=q.query
fs.writeFile("fsd.txt",qdata,(err)=>{
    if(err) throw err;
    console.log("source file created")})
process.noDeprecation=true;


