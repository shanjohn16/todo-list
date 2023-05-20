import React from 'react'
import Lists from './Lists'

const ItemLists = ({todos,setTodos}) => {

  const handleDelete = (todoID) =>{
    
    console.log(todoID)
    const updatedTodos = todos.filter((todo) => todo.id !== todoID);
    setTodos(updatedTodos) }
 
  return (

    <>
      
      Itemlists
      <ul>
            {todos.map((todo)=>(<li key={todo.id}> <Lists todo = {todo} handleDelete={handleDelete}/> </li>) ) } 
        </ul>
    </>
    
  )
}

export default ItemLists