import { useState } from 'react'
import {nanoid} from 'nanoid'
import ItemLists from './components/ItemLists'
import AddTodo from './components/AddTodo'
import React from 'react'

const App = () => {
  const [todos, setTodos] = useState(
    [
      {
        id: nanoid(),
        todo: "Todo",
      },
      {
        id: nanoid(),
        todo:" Wash the dishes",
      },
    ]
  );
  const [task,setTask] = useState('');

  

  const handleAdd = (event) => {
    event.preventDefault();
    const newItem = { id: nanoid(), todo: task };
    const newTodos = [...todos, newItem]; // Update the items array
    setTodos(newTodos);
    setTask('');
  };


  

  console.log(todos)

  return (

    <>
    
      <form onSubmit={handleAdd}>
        <input value ={task} onChange={(event)=>{setTask(event.target.value)}} type="text" placeholder='Add a task' />
        <AddTodo handleAdd={handleAdd} />
      </form>
      <div>{task}</div>

      

      <ItemLists todos ={todos} />
      
      
    </>
  )
}

export default App
