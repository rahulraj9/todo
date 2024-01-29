// Actions
export const ADD_TODO='Add Todo'
export const DELETE_TODO='Delete Todo'
export const UPDATE_TODO='Update Todo'


//Action creator

export const addTodo =(text)=>({text,type:ADD_TODO})
export const updatedTod =(index)=>({index,type:UPDATE_TODO})
export const deleteTodo = (index)=>({index,type:DELETE_TODO})