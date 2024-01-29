import { useState } from "react";
import "./TodoForm.css";
export default function TodoForm() {
  const [todo,setTodo] = useState()

  function handleSubmit(e){
    e.preventDefault()
    console.log("todo",todo)
  }
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <input placeholder="Add your todo..." className="inputData" onChange={(e)=>setTodo(e.target.value)}></input>
        <button className="addButton">Add</button>
      </form>
    </>
  );
}
