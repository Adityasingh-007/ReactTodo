import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice';

const AddTodo = () => {

  const [val,setVal]=useState("")

  const dispatch=useDispatch();

  function addTodoHandler(e){
      e.preventDefault();
      dispatch(addTodo(val))
      setVal("")
  }
  return (
    <div>
      <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
        <input type="text" onChange={(e)=>setVal(e.target.value)} value={val} className='bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' />

        <button type='submit' className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">AddTodo</button>
        </form>
    </div>
  )
}

export default AddTodo