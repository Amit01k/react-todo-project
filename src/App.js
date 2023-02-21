import logo from './logo.svg';
import './App.css';
import Header from './MyComponent/Header';
import { TodoItem } from './MyComponent/TodoItem';
import { Todos } from './MyComponent/Todos';
import { Footer } from './MyComponent/Footer';
import { AddTodo } from './MyComponent/AddTodo';

import React,{useState} from 'react';
// import { useState } from 'react';
function App() {
  const onDelete=(todo)=>{
    // console.log("i am deleted",todo)
    setTodos(todos.filter((e)=>{
      return e!==todo
    }))
  }

  const addTodo = (title,desc)=>{
    console.log("i am adding",title,desc)
    let sno=todos[todos.length-1].sno+1
    console.log("serial number",sno)
    const myTodo={
      sno:sno,
      title:title,
      desc:desc
    }
    setTodos([...todos,myTodo])
  }
  let variable=345
  let [todos,setTodos]=useState([
    {
      sno:1,
      title:"go market",
      desc:"go with your frnd and eat somthings work: 1"

    },
    {
      sno:2,
      title:"go market",
      desc:"go with your frnd and eat somthings work: 2"

    },
    {
      sno:3,
      title:"go market",
      desc:"go with your frnd and eat somthings wprk: 3"

    },
    {
      sno:4,
      title:"go market",
      desc:"go with your frnd and eat somthings work: 4"

    },
    {
      sno:5,
      title:"go market",
      desc:"go with your frnd and eat somthings wprk: 5"

    },

  ])
  return ( 
    <>
      <Header title=" my todos list" searchBar={false}/>
      <AddTodo addTodo={addTodo}/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer/>
      </>
  );
}

export default App;
