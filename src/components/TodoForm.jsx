import { useState } from "react";
import "./TodoForm.css";
export default function TodoForm(props) {
  const [todotext, setTodotext] = useState('');
 

  function handleSubmit(e) {
    e.preventDefault();
    props.addTodo(todotext)
  }
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <input
          placeholder="Add your todo..."
          className="inputData"
          value={todotext}
          onChange={(e) => setTodotext(e.target.value)}
        ></input>
        <button className="addButton">Submit</button>
      </form>
    </>
  );
}
