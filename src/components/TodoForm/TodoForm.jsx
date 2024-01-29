import { useState } from "react";
import {useDispatch } from "react-redux";
import {addTodo} from '../../redux/actions/todoActions'
import "./TodoForm.css";
export default function TodoForm() {
  const [todotext, setTodotext] = useState("");
  const dispatch = useDispatch()

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addTodo(todotext))
    setTodotext('')
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
