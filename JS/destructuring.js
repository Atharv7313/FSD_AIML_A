const person={
    name:"XYZ",
    age:45,
    salary:103526.22
}
// old way
// console.log(person.name);
// console.log(person.age);
// console.log(person.salary);

const {name,age,salary}=person;
console.log(name);
console.log(age);
console.log(salary);

const emp=["abc",45,102546.5,"GZB"];
const [name1,age1,salary1,city]=emp;
console.log(name1);
console.log(age1);
console.log(salary1);
console.log(city);