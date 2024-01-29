import {ADD_TODO,DELETE_TODO,UPDATE_TOD} from '../actions/todoActions'
const initialState={
  todos:[]
}
export default function todoReducer(state=initialState,action){
  switch (action.type) {
    case ADD_TODO:
      return{
        ...state,
        todos:[
          ...state.todos,
          {
            text:action.text,
            completed:false
          }
        ]
      }
    case UPDATE_TOD:
      return{
        ...state,
        todos:state.todos.map((todo,i)=>{
          if(i===action.index){
            todo.completed = !todo.completed
          }
          return todo
        })
      }
    // case DELETE_TODO:
    default:
      return state;
  }
}