function register(resolve){
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Register End");
        resolve();
    },3000)
})
}

function sendemail(resolve){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Email send")
            resolve();
        },3000)
    })
}
function login(resolve){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Login end")
            resolve();
        },3000)
    })
}

function getdata(resolve){
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("got user data")
        resolve();
    },3000)
})
}
function displaydata(resolve){
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("data displayed")
        resolve();
    },3000)
})
}


register().then(sendemail).then(login).then(getdata).then(displaydata)

