// write node js script to fatch the query string from the static url and check if year is leap year or not 

var u=require("url")
var addr="http://localhost:8080/default.html?year=2026&month=feb"
var q= u.parse(addr,true)
console.log(q)
qdata=q.query
console.log(qdata.year)
if (qdata.year%4==0){
    console.log("It is a leap year")
}
else{
console.log("this is not leap year")
}
process.noDeprecation=true;
