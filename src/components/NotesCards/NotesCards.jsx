import { useDispatch, useSelector } from "react-redux"
import {deleteNotes} from '../../redux/actions/notesActions'

export default function NotesCard(){
  const dispatch = useDispatch()
  const notes = useSelector((state)=>state.notesReducer.notes)
  function handleDelete(i){
    console.log(i)
    dispatch(deleteNotes(i))
  }
  return(
    <div >
    {notes.map((item,index) => {
      console.log("index",item)
      return (
        <div className="container" key={index}>
          <div style={{textDecoration:item.completed?'line-through':''}}>{item.text}</div>
          <div>
            <button className="dltBtn" onClick={(e)=>handleDelete(index)}>Deleted</button>
          </div>
        </div>
      );
    })}
  </div>
  )
  
}