import React from 'react'

const Lists = ({todo}) => {
  return (
    <>
        <div>
          
          <span>{todo.todo}</span>
            
          <button>Delete</button>
            
        </div>
    </>
  )
}

export default Lists