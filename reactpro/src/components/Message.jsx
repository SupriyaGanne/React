import React from 'react'
function Handleclick(){
    
    console.log("clicked"); 
}

function Message() {
  return (
    <div>
        <button onClick={Handleclick}>click</button>
    </div>
  )
}

export default Message