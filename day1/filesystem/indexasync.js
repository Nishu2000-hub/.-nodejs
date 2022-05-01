let fs=require('fs');
let fdata=fs.readFile("data.txt","utf-8",(err,data)=>{
    if(err){
        console.log("unable")

    }
    else{
        console.log(data)                                   ////write fiile from existing file
        fs.writeFile("data2.txt",data,(err)=>{
            if(err){
                console.log("error")
            }
        })
    }
})