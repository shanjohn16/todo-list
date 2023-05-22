import React from 'react'
import { Flex,Spacer, Button} from '@chakra-ui/react'

const Lists = ({todo,handleDelete}) => {


  return (
    <>
        <div>
          <Flex direction="row" gap="5" p="2" w={500}>
            <span>{todo.todo}</span>
              <Spacer/>
            <Button onClick={()=>handleDelete(todo.id) }size="sm" colorScheme='red' variant="outline" >Delete</Button>
          </Flex>

            
        </div>
    </>
  )
}

export default Lists