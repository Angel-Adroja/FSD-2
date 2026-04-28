
var express= require('express')
var app=express();

app.use(express.static(__dirname))
app.listen(1001)

// write express js script to print msg in next line splitting by "." and use get method to submit the form data. two.html file contains form of text area forthe msg and submit button . 