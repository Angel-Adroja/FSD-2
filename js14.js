// registraing multiple events lister for different events(myEvent1,myEvent2) removing a specific event listener(removelistner) for myEvent2 3)removing all the listerner  associated with myEvent1 (remove all listner) triger all lister and observe which event lister is exicute 

const eventemiter=require("events")
const ee=new eventemiter()

var fun1=(msg)=>{
    console.log("Msg form fun1:"+ msg)
}
var fun2=(msg)=>{
    console.log("Msg form fun2:"+ msg)
}
ee.on("myEvent1",fun1)
ee.on("myEvent2",fun2)
ee.on("myEvent1",fun1)
ee.on("myEvent2",fun2)

ee.removeListener("myEvent2",fun2)
ee.removeAllListeners("myEvent1")
ee.emit("myEvent1","LJ university")
ee.emit("myEvent2","LJIET ")


