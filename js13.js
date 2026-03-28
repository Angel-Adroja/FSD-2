// const eventemiter=require("events")
// const { start } = require("repl")
// const ee=new eventemiter()
// // ee.on('start',()=>{
// //     console.log('started')
// // })
// // ee.emit('start')

// ee.on('start',(start,end)=>{
//     console.log("startef from "+start+" to " +end)
// })
// ee.emit('start',1,100)

// write node js program using the events module to stimulate a sequence of events 1)when a "connection" events occur, print "connection successfully" and trigger a data recieved events.2) when the data recieve events occur,print "data recieved successfully".3) finally print thanks end of the exicution.

const eventemiter=require("events")
const ee=new eventemiter()
ee.on("connection",function(){
    console.log("conn. success")
    ee.emit("data-recovered")
})

ee.on("data-recovered", function(){
    console.log("data recieved success")
})

ee.emit("connection")
console.log("Thanks")


