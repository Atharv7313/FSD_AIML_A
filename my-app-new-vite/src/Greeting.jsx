// const Greeting = (props)=>{
//     return (
//         <div>
//           <h2>  Hello User {props.name} age is {props.age}</h2>
//         </div>
//     )
// }

// another method to give props 
// const Greeting = ({name="abc",age=28})=>{
//     return (
//         <div>
//           <h2>  Hello User {name} age is {age}</h2>
//         </div>
//     )
// }

// another way to add default values  

const Greeting = ({name,age})=>{
    return (
        <div>
          <h2>  Hello User {name} age is {age}</h2>
        </div>
    )
      } 
   Greeting.defaultProps={
      name:"AS",
      age:52
    }

export default Greeting;