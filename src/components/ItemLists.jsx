import React from 'react'
import Lists from './Lists'
const ItemLists = ({todos}) => {
  return (
    <div>Itemlists
      <ul>
            {todos.map((todos)=>(<li key={todos.id}> <Lists todo = {todos.todo}/> </li>) ) } 
        </ul>
    </div>
    
  )
}

export default ItemLists