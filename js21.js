// write node js program to parse the url and calculate the avg of 3 numbers passed as query parameter 

var u=require("url")
var fs=require("fs")
var addr="http://localhost:8000/test?m1=50&m2=60&m3=70"
var q= u.parse(addr,true)
qdata=q.query
console.log(qdata)
var m1=parseInt(qdata.m1)
var m2=parseInt(qdata.m2)
var m3=parseInt(qdata.m3)

var avg=(m1+m2+m3)/3
console.log(avg)
process.noDeprecation=true;

