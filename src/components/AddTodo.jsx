import React from 'react'
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Button } from '@chakra-ui/react';

const AddTodo = ({handleAdd}) => {



  return (
    <>

        <Button onClick={handleAdd} size="md" colorScheme='purple' >
            Add
        </Button>
    </>
  )
}

export default AddTodo