// read data from file ans sort that data in assending order using .sort() 
// ["50 -1 99 150 20 0 56 18 59"]  
var ps=require("fs")
ps.writeFileSync("s1.txt","50 -1 99 150 20 0 56 18 59 ")
data=ps.readFileSync("s1.txt","utf-8")
console.log(data)
data1=data.split(" ")
console.log(data1)
d=data1.sort((a,b)=>a-b)
console.log(d)


