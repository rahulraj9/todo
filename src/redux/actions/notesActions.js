
export const ADD_NOTES = 'ADD Notes'
export const DELETE_NOTES='Delete Notes'

export const addNotes = (text)=>({text,type:ADD_NOTES})
export const deleteNotes = (index)=>({index,type:DELETE_NOTES})