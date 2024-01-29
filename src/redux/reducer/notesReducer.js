import{ADD_NOTES,DELETE_NOTES} from '../actions/notesActions'
const inititalAction = {
  notes:[
    {
      text:"note1"
    },
    {
      text:"note12"
    }
  ]
}
export default function notesReducer(state=inititalAction,action){
  switch (action.type) {
    case ADD_NOTES:
      return{
        ...state,
        notes:[
          ...state.notes,
          {
            text:action.text
          }
        ]
      }
    case DELETE_NOTES:
      return{
        ...state,
        notes:state.notes.filter((item,index)=>{
          return index!==action.index
        })
      }
  
    default:
      return state;
  }
}