import React, { useState } from 'react'
// import React,{useState} from 'react'
export const AddTodo = (props) => {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const submit =(e)=>{
    e.preventDefault()
    if(!title ||!desc){
        alert("title or Description can't be blank")
    }
    props.addTodo(title, desc)


} 
  return (
    <div className='container '>
        <h3>add your todo task here</h3>
        <form onSubmit={submit}>
  <div class="mb-3">
    <label htmlfor="title">todo title</label>
    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} class="form-control" id="title" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label htmlfor="desc">todo description</label>
    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}}class="form-control" id="desc"/>
  </div>
  <button type="submit" class="btn btn-success">Submit</button>
</form>
    </div> 
  )
}
