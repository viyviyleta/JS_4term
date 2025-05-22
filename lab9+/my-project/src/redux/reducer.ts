import {
    TodoState,
    TodoActionTypes,
    ADD_TODO,
    TOGGLE_TODO,
    EDIT_TODO,
    DELETE_TODO,
    SET_EDITING_TODO
  } from './types';
  
  const initialState: TodoState = {
    todos: []
  };
  
  export const todoReducer = (state = initialState, action: TodoActionTypes): TodoState => {
    switch (action.type) {

      case ADD_TODO:
        return {
          ...state,
          todos: [
            ...state.todos,
            { id: Date.now(), text: action.payload, completed: false }
          ]
        };
  
      case TOGGLE_TODO:
        return {
          ...state,
          todos: state.todos.map(todo =>
            todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
          )
        };
  
      case EDIT_TODO:
        return {
          ...state,
          todos: state.todos.map(todo =>
            todo.id === action.payload.id 
              ? { ...todo, text: action.payload.text, isEditing: false } 
              : todo
          )
        };
  
      case DELETE_TODO:
        return {
          ...state,
          todos: state.todos.filter(todo => todo.id !== action.payload)
        };
  
      case SET_EDITING_TODO:
        return {
          ...state,
          todos: state.todos.map(todo =>
            todo.id === action.payload 
              ? { ...todo, isEditing: true }
              : { ...todo, isEditing: false }
          )
        };
  
      default:
        return state;
    }
  };
  