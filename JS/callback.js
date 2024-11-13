function register(cb){
    setTimeout(()=>{
        console.log("Register End");
   cb();
    },3000)
}
function getdata(cb){
    setTimeout(()=>{
        console.log("got user data")
   cb();
    },3000)
}
function displaydata(cb){

    setTimeout(()=>{
   cb();

        console.log("data displayed")
        // console.log("Register End");
    },3000)  
}
function sendemail(cb){
    setTimeout(()=>{
   cb();

        // console.log("data displayed")
        // console.log("Register End");
        console.log("Email send")
    },3000)
}

function login(){
    setTimeout(()=>{

        // console.log("data displayed")
        // console.log("Register End");
        console.log("Login end")
    },3000)
}
console.log("Run ")
// function waitforthreesecond(){
//  const ms=3000+new Date().getTime();
//  while(ms> new Date()){}  
// }
// register();
// sendemail();
// login();
// getdata();
// displaydata();

register(function(){
sendemail(function(){
    login(function(){
        getdata(function(){
            displaydata();
        });
    });
  });
});



