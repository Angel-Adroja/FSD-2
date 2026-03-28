// write js program using fs modual (sync) method to manage to the data . the program should perform following task 1) create a directory name studentData, inside the directory, create json file student.json containg student record with name and marks (array of 3 objects).3)read the json file convert into java script object and display all the student record display student who scored 75 marks using loop and condition  finally remove the file and directory

var ps=require("fs")
const { json } = require("stream/consumers")
//ps.mkdirSync("Student_Data")
console.log("directory created")
let student=[{"name":"abc","marks":80},
              {"name":"rahul","marks":67},
               {"name":"xyz","marks":75}
            ]
ps.writeFileSync("Student_Data/s2.js",JSON.stringify(student))
console.log("file genrated")

let data=JSON.parse(ps.readFileSync("Student_Data/s2.js","utf-8"))
console.log("student list")
console.log(data);
for (s of data){
    if(s.marks>75)
    {
        console.log(s.name+" "+s.marks)
    }
}
ps.unlinkSync("Student_Data/s2.js")
ps.unlink("Student_Data")
