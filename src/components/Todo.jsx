import React, { useState } from 'react'
import "../styles/todo.css"
const Todo = () => {
    const [todo,setTodo]=useState([])
    const[input,setInput]=useState("")
    const handleSubmit=e=>{
        e.preventDefault();
        if(input.trim()){
            setTodo([...todo,input])
            setInput("")
        }
    }
    const handleChange=e=>{
        setInput(e.target.value)
    }
  return (
    
    <div className="todo_container">
        <h1>TODO APP</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" value={input} onChange={handleChange} placeholder='Enter Todo'  />
            <button type='submit' >Add Todo</button>
        </form>
        {todo.map((t,index)=>(
            <li key={index}>{t}</li>
        ))}
    </div>
  )
}

export default Todo