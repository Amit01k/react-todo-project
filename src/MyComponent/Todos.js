import React from 'react'
import { TodoItem } from './TodoItem'
export const Todos = (props) => {
    let myStyle={
        minHeight:'70vh'
    }
  return (
    <div className='container my-3' style={myStyle}>
        <h3 className='text-center m-5'>Todos List</h3>
        {props.todos.length===0?"No task available all tasks deleted.":
        props.todos.map((todo) =>{
            return <TodoItem todo={todo} onDelete={props.onDelete}/>
        })}
        
        
    </div>
  )
}
