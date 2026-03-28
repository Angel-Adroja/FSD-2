// write node js script to create to lister for common events. print number of events assosiated with an emitter. remove one listner and call remainig listner again. also print number of remainng listner 

const eventemiter=require("events")
const ee=new eventemiter()

var listner1=function(){
    console.log("Listner 1 Executed")
}
var listner2=function(){
    console.log("Listner 2 Executed")
}

ee.on("conn",listner1)
ee.on("conn",listner2)

let count=ee.listenerCount("conn")
console.log("conn1:"+count)
//ee.emit("conn")
ee.removeAllListeners("conn")
count=ee.listenerCount("conn")
console.log("count agains: "+count)
ee.emit("conn")



