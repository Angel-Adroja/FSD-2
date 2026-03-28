// write node js script that asynch write data to a file test.js if no error occur during writing process,the script should then append additional data to the same file. finally it should read the contain from the file and display in the console .

var fs=require("fs")
fs.writeFile("test2.txt","hello ",(err)=>{
    if(err) throw err;
    else
        {
        fs.appendFile("test2.txt","world",(err)=>{
        if(err) throw err;
        else
            {
             fs.readFile("test2.txt","utf-8",(err,data)=>{
                if(err) throw err;
                else
                {
                console.log("append text file read")

                }
        })
    }
})
}
})

 