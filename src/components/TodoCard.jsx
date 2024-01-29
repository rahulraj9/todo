import "./TodoCard.css";
import { useSelector,useDispatch } from "react-redux";
import {updatedTod,deleteTodo} from '../redux/actions/todoActions'
export default function TodoCard(props) {
  const todos = useSelector((state)=>state.todos)
  const dispatch = useDispatch()

  function handleComplete(i){
    console.log(i)
    dispatch(updatedTod(i))
  }
  function handleDelete(i){
    console.log(i)
    dispatch(deleteTodo(i))
  }

  return (
    <div >
      {todos.map((item,index) => {
        console.log("index",item)
        return (
          <div className="container" key={index}>
            <div style={{textDecoration:item.completed?'line-through':''}}>{item.text}</div>
            <div>
              <button className="cmpBtn" onClick={(e)=>handleComplete(index)}>{item.completed?"Mark it as uncompleted":"completed"}</button>
              <button className="dltBtn" onClick={(e)=>handleDelete(index)}>Deleted</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
