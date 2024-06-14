import React, { useState } from 'react'

function Counter() {
    const [count,setCount]=useState(0);
    const[Increment,IncrementBy]=useState(1);
    function Increase(){
        IncrementBy(Increment+1);
    }
    function Handle(){
        setCount(count+Increment);
    }
  return (
    <div>
        <h1>the count is :{count} </h1>
        <button onClick={Handle}>Increment</button>
        <h2>{Increment}</h2>
        <button onClick={Increase}>IncrementBY</button>
    </div>
  )
}

export default Counter