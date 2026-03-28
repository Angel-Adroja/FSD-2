// write node js script and json to perform below task.write below object in s2.txt file read data from the same file and perform below task 1)add a&b 2)substract 2nd elemet of c and b (must be positive) add the o/p od addition and substraction below the object in the file 


const fs = require("fs");

let student = {
  e: {
    a: 10,
    b: 20,
    c: [30, 10]
  }
};

fs.writeFileSync("s2.txt", JSON.stringify(student, null, 2));
console.log("s2.txt file created");

let data = fs.readFileSync("s2.txt", "utf-8");
let d = JSON.parse(data);

let add = d.e.a + d.e.b; 
let sub = Math.abs(d.e.c[1] - d.e.b); 

let result = `

Results:
Addition (a + b) = ${add}
Subtraction (|c[1] - b|) = ${sub}
`;

fs.appendFileSync("s2.txt", result);

console.log("Results appended to file");