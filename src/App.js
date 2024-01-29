import { useState } from "react";
import TodoCard from "./components/TodoCard";
import TodoForm from "./components/TodoForm";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(todo) {
    console.log("inside this");
    setTodos([...todos, {text:todo,cmp:false}]);
  }

  function handleDelete(index) {
    let updatedTods = [...todos];
    updatedTods.splice(index, 1);
    setTodos(updatedTods);
  }

  function handleComplete(index){
    let updatedTods = [...todos]
    updatedTods[index].cmp = !updatedTods[index].cmp
    setTodos(updatedTods)
  }
  return (
    <div className="App">
      <header className="App-header" style={style.header}><h2>TODO LIST</h2></header>
      <TodoForm addTodo={addTodo} />
      <TodoCard list={todos} handleDelete={handleDelete} handleComplete={handleComplete} />
    </div>
  );
}
const style={
  header:{
    textAlign:"center"

  }
}
export default App;
