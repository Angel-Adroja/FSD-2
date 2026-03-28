// create object which contain array of object.calculate parimeter of squre and parimeter of circle by using side value and diameter value respectiviely with object as well as perimeter values of squre and circle in shape.txt file 


var ps=require("fs")
let student=[{"name":"circle","diameter":8},
              {"name":"squre","side":10}
            ]
ps.writeFile("shape.txt",JSON.stringify(student),(err)=>{
    if(err) throw err;
    console.log("shape file created")
    data=ps.readFile("shape.txt","utf-8",(err,data)=>{
    if(err) throw err;
    d=JSON.parse(data)
    console.log(d)
    var paracircle=d[0].diameter*2*3.14
    var parasqure =d[1].side*4

    ps.appendFile("shape.txt", paracircle, (err,d) => 
    {
      if (err) throw err;
      console.log("Perimeters added to file");
    });
}) ;
});
