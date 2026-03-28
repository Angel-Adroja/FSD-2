// write node js script that perform following operation usng the path module and asych file system module !)from the given existing file path ("lj/sample.txt"), extrect directory name using path module. create the extrected directory inside and existing folder using fs module. extrect the file name from the given path. create that file inside the newly created directory write some data into it. copy the contain of this file to another file (temp.txt). delete the original file after copying the containt.
var ps=require("fs")
var pm=require("path")
let oldpath="lj/sample.txt"
let dir=pm.dirname(oldpath)
let filename=pm.basename(oldpath)
let newfilepath=dir+"/"+filename
ps.mkdir(dir,(err)=>{
    if(err) throw err;
    console.log("directory created",dir)
    ps.writeFile(newfilepath," hello",(err)=>{
        if(err) throw err;
        console.log("original file create");
        ps.copyFile(newfilepath,"temp.txt")
    })
})
//error in this code