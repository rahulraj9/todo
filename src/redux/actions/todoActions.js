// Actions
const ADD_TODO='Add Todo'
const DELETE_TODO='Delete Todo'
const UPDATE_TOD='Update Todo'


//Action creator

export const addTodo =(text)=>({text,type:ADD_TODO})
export const updatedTod =(index)=>({index,type:UPDATE_TOD})
export const deleteTodo = (index)=>({index,type:DELETE_TODO})