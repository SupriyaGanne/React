import React, { useState } from 'react'

function Form() {

  const [name,setName]=useState("")
  // function Handle(e){
  //   console.log(e.target.value);
  //   setName(e.target.value);
  // }

  return (
    <div>
      <form>
        <input 
        //   onChange={function demo(e){
        //   return Handle(e)
        // }} 
        // 
        onChange={(e)=>setName(e.target.value)}
        type="text" value={name}></input>
      </form>

    </div>
  )
}

export default Form