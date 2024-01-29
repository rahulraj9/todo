import { useState } from "react";
import TodoCard from './components/TodoCards/TodoCard'
import TodoForm from "./components/TodoForm/TodoForm";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <div className="App">
      <header className="App-header" style={style.header}>
        <h2>TODO LIST</h2>
      </header>
      <Provider store={store}>
        <TodoForm />
        <TodoCard />
      </Provider>
    </div>
  );
}
const style = {
  header: {
    textAlign: "center",
  },
};
export default App;
