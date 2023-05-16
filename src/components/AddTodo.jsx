import React from 'react'

const AddTodo = (todo,task) => {

    


const handleAdd = ()=> {


    const item = {id: nanoid(), todo: task, };

    setTodo([...todo,item])
    


}





  return (
    <div>

        <button onClick={handleAdd}>
            Add
        </button>
    </div>
  )
}

export default AddTodo