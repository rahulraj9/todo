import { createStore, combineReducers } from "redux";

import todoReducer from "./reducer/todoReducer";
import notesReducer from "./reducer/notesReducer";

export const result = combineReducers({
  todoReducer: todoReducer,
  notesReducer: notesReducer,
});
export const store = createStore(result)