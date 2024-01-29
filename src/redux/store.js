import redux from 'redux'

import todoReducer from './reducer/todoReducer'


export const store = redux.createStore(todoReducer)