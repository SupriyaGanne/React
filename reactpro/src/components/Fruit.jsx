import React from 'react'

function Fruit({name,price}) {
  return (
    <div>
      {price>5? (
       <h2>{name} {price}</h2> )
        :("underprice")}
    </div>
  )
}

export default Fruit