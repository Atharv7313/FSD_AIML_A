const mypromise= new Promise(
    (resolve,reject)=>{
        console.log("executed promise");
        // resolve("success");
reject("network na maane")
    }
);

mypromise.then((msg)=>{
    console.log(msg);
}).catch((err)=>{
    console.log(err);
}).finally(()=>{
    console.log("executed finally");
})

