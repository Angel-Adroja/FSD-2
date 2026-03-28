var fs=require("fs")
fs.writeFileSync("test.txt","hello");
console.log("sync write operation completed")
console.log("outside")
fs.writeFile("abc/test2.txt","hello",function(err){
    if(err){
        console.log('Error',err);
    }
    else
        console.log("Async operation completed")
    
});
console.log("outside")



