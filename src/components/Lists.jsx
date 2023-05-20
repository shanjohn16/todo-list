import React from 'react'

const Lists = ({todo,handleDelete}) => {


 




  return (
    <>
        <div>
          
          <span>{todo.todo}</span>
            
          <button onClick={()=>handleDelete(todo.id)} >Delete</button>
            
        </div>
    </>
  )
}

export default Lists