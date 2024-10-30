
import React, { useState } from 'react'


const App = () => {

  // let todo=[{id:1,text:"hello world"}]

  const [val, setVal] = useState("");

  const [todos,setTodos]=useState([]);

  function addTodo(){
    // todos.push(val);
    setTodos([...todos,{text:val}])
    setVal("");
  }

  function removeTodo(idx){
    const updatedTodo=todos.filter((todo,index)=>(index!==idx))

    setTodos(updatedTodo)
  }


  return (

    <div className='min-h-screen bg-black flex items-center justify-center'>
      <div className=' bg-gray-700 bg-blend-lighten bg p-8  w-96 rounded-md' >

          <h1 className=' text-black text-center text-2xl mb-6 bg-violet-400 rounded-lg p-4'>TodoList</h1>

        <div className=' flex items-center justify-center'>
          <input className='bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' value={val} onChange={(e) => setVal(e.target.value)} type='text' placeholder='Enter a Todo' />
          <button className=' ml-8 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg' onClick={addTodo}>Add</button>
        </div>

        <ul className=' mt-6 list-none'>
          {
          todos.map((todo,idx)=>( // after => we use ()to implicitely return ussing this {} will not work
            //Without a unique key, React would re-render every item in the list, even if only one item has changed, which could be inefficient for larger lists.
            
            <li key={idx} className='mt-4 flex items-center justify-between  bg-zinc-800 px-4 py-2 rounded'> 
            <div className=' bg-slate-500 text-blue-200'>{todo.text}</div>
            <button className='text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md' onClick={()=>removeTodo(idx)} >Delete</button>
            </li>
          ))
          }
        </ul>
      </div>
    </div>
  )
}

export default App