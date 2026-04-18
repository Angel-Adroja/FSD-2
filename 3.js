// write an express js script to define 1 json array of 3 objecet of 3 object having properties name,age . sort this object acording to age . if user request sorted name in url then all names along with age should be printed according to decending order of age.also display this sorted values on "sortpage" and display json object on homepage.

var express= require('express')
var app=express();

student=[
    {name:"a",age:13},
    {name:"b",age:23},
    {name:"c",age:25}
]
app.get('/',function(req,res){
    res.send(student)
})

app.get('/sort',function(req,res){
    res.set("content-type","text/html")
    var des=student.sort((a,b)=>b.age-a.age)
    for (k of des){
        res.write(k.name+"="+k.age)
    }
    res.end()
    })
app.listen(5000);