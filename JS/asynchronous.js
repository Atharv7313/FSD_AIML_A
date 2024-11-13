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
                return reject("new error caught")
                console.log("Login end")
                // resolve();s
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
    
    async function authentication() {
       try{ await register();
        await sendemail();
        await login();
        await getdata();
        await displaydata();
       }
    catch(err){
        console.log("error",err);
    }
}
console.log("work other application")    
authentication()