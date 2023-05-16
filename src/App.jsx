import { useState } from 'react'
import {nanoid} from 'nanoid'
import ItemLists from './components/ItemLists'
import AddTodo from './components/AddTodo'
import React from 'react'

const App = () => {
  const [todos,setTodos] = useState([
    {id: nanoid(),
     todo:'Clean the bathroom',
    },
    {id: nanoid(),
      todo:'Wash the dishes',
     },
  
  
  ]);
  const [task,setTask] = useState('');


  

  console.log(todos)

  return (

    <>
    
      <form>
        <input value ={task} onChange={(event)=>{setTask(event.target.value)}} type="text" placeholder='Add a task' />
        <AddTodo todo={todos} task={task}/>
      </form>
      <div>{task}</div>

      

      <ItemLists todos ={todos} />
      
      
    </>
  )
}

export default App
