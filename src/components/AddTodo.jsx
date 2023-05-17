import React from 'react'
import { useState } from 'react';
import { nanoid } from 'nanoid';

const AddTodo = ({handleAdd}) => {



  return (
    <>

        <button onClick={handleAdd}>
            Add
        </button>
    </>
  )
}

export default AddTodo