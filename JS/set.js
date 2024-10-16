const myset=new Set();
console.log(myset);
myset.add(24);
myset.add(23);
myset.add(21);
myset.add(20);
myset.add(20);
console.log(myset);
// const myfilter=new Set(
//     Array.from(myset).filter((value) =>value %2==0)
// );
// const a1=myset.filter((n)=>{return (n%2==0)});
// console.log(a1)
const num=[1,2,3,4,5,6]
const a1=num.map((n)=>{
    return (n*2)});
console.log(a1)

// reduce
// sum
const a2=num.reduce((n,s)=>{
return (n+s)
});
console.log(a2)