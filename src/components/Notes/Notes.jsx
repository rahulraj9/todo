import { useDispatch } from 'react-redux'
import {addNotes} from '../../redux/actions/notesActions'
import './Notes.css'
import { useState } from 'react'
export default function Notes(){
  const[note,setNotes] = useState()
  const dispatch = useDispatch()
  function handleSubmit(e){
    e.preventDefault()
    dispatch(addNotes(note))
  }
  return(<div className="mainNotesDiv">
    <textarea className="notes" placeholder="Add notes..." onChange={(e)=>setNotes(e.target.value)}></textarea>
    <button className="noteBtn" onClick={handleSubmit} >Add</button>
  </div>)
}