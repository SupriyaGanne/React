import React from 'react'
import Fruit from './Fruit'

function Fruits() {

    //const fruits=['Apple','Mango',"orange"]
    const fruits = [
      {name:'Apple',price:'10'},
      {name:'MAngo',price:'20'},
      {name:'Banana',price:'30'},

    ]

  return (
    <div>
      <ul>
        {fruits.map(fruit=>
        // <li key="fruit.name">
        //   <h1>{fruit.name} {fruit.price}</h1>
        // </li>
        <Fruit key={fruit.name} name={fruit.name} price={fruit.price}/>

        )}
      </ul>
    </div>
  )
}
 
export default Fruits