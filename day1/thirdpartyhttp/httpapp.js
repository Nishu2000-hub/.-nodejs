let http=require('http')

http.get("http://localhost:3001/menu", res => {
    let arr = [];
    res.on("data", arrData => {
        console.log("inside get data")
        arr.push(arrData);
    })
    res.on("end",()=>{
        console.log("inside end")
        console.log(JSON.parse(Buffer.concat(arr).toString()));
    })
})

// let request = require ('request');
// request.get("http://localhost:3001/menu",(err,res)=>{
//     if (err){
//         console.log("error")
//     }else{
//         console.log(res.body)
//     }
// })