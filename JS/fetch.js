const data=fetch("https://api.github.com/users/Atharv7313")
data.then((data1)=>{
  return  data1.json();
}).then((res)=>{
console.log(res);
})
