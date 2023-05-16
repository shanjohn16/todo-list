import React from 'react'
import Lists from './Lists'

const ItemLists = ({todos}) => {
 
  return (

    <>
      
      Itemlists
      <ul>
            {todos.map((todo)=>(<li key={todo.id}> <Lists todo = {todo}/> </li>) ) } 
        </ul>
    </>
    
  )
}

export default ItemLists