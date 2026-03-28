// write node js script to fetch value from the url given below and display o/p as ask .data must be return as below in file name exam.txt.file name fetch must be url.read containt from the file and send response to the server in "/"page but in h1 tag &red color if any other page is requested it shpows page ot found msg.

var http=require("http")
var url=require('url')
var fs =require("fs")

const url1="https://www.google.com/exam.txt?C1=Hello&C2=FSD2+T1+Test&C3=Welcome+T0+LJU#ALLTHEBEST"
const parseurl=url.parse(url1,true)
console.log(parseurl.pathname)
const c1=parseurl.query.C1
const c2=parseurl.query.C2
const c3=parseurl.query.C3
hash1=parseurl.hash
const filename="."+parseurl.pathname
const content=c1+"!\n"+c3+" "+c2+"\n"+hash1

fs.writeFileSync(filename,content)
    

http.createServer((req,res)=>{
    if(req.url=='/'){
        data=fs.readFileSync(filename,"utf-8")
        res.writeHead(200,{'content-type':'text/html'})
        res.end("<h1 style='color:red'>"+data+"</h1>")
    }
    else{
        res.writeHead(404,{'content-type':'text/plain'})
        res.end("page not found")
    }
}).listen(1005)
