import { Flex } from '@chakra-ui/react'
import React from 'react'
import TodoList from './TodoList'
import Sidebar from './components/Sidebar'

const App = () => {
  return (
    <div>
        <Flex >
            <Flex w={350} border="2px" ><Sidebar/></Flex>
            <Flex flex={1}> <TodoList/> </Flex>

      
      
        </Flex>


    </div>
  )
}

export default App