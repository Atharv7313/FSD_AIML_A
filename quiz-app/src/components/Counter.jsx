import React, { useState } from 'react'


const Counter=()=>{
    // const Array =useState(0);
    // const count=Array[0]
    // const setCount=Array[1]

    //in short

    const [count,setCount]=useState(0)
    function handleDecrease(){
        setCount(count-1)
    }
    function handleIncrease(){
        setCount(count+1)
    }
useEffect(()=>{
alert("hi",{count})
//setCount1(count*5},[count])
  return (
    <div>
        <h1>Counter:{count}</h1>
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={handleDecrease}>Decrease</button>

    </div>
  )
}

export default Counter