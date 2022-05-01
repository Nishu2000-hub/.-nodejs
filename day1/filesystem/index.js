let fs=require('fs');
let filedata=fs.readFileSync('data.txt','utf-8')            ///for read from data text file
console.log(filedata)


let fdata=fs.readFile("data.txt","utf-8",(err,data)=>{
    if(err){
        console.log("unable")

    }
    else{
        console.log(data)
    }
})