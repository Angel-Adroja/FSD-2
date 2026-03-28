// const a = {
//   "A": "LJU",
//   "B": ["CSE", "IT", "CE"],
//   "C": [
//     {
//       "D": "Hi",
//       "E": ['are', 4, { "F": ['semester', 'we'] }]
//     }
//   ],
//   "G": {
//     "H": "students",
//     "I": ["of", "!"]
//   },
//   "j": [{"K": "python", "L": "branch"}, "FSD-2"]
// };

// const sentence =a.C[0].D + a.G.I[1] + " " +a.C[0].E[2].F[1] + " " + a.C[0].E[0] + " " + a.G.H + " " +a.G.I[0] + " " +   a.C[0].E[2].F[0] + " " + a.C[0].E[1] + " " +a.B[2] + " " +a.j[0].L;                

// console.log(sentence);


// function main(cb){
//     console.log("Task! completed");
//     setTimeout(function(){
//         cb("operation! completed");
//     },2000);
//     console.log("Task! 2 completed")
// }
// function callback(result){
//     console.log("Result: "+result)
// }
// main(callback);

//method 1
const message= function(){
    console.log("print of 3 sec")
}
setTimeout(message,3000);

//method 2
setTimeout(function(){
    console.log("hello");
},3000)

//method 3
setTimeout((c)=>{
    console.log("hi")
},3000);