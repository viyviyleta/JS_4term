import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from './Todo';

interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: []
};

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
      addTodo: (state, action: PayloadAction<string>) => {
        state.todos.push({ id: Date.now(), text: action.payload, completed: false });
      },
      toggleTodo: (state, action: PayloadAction<number>) => {
        const todo = state.todos.find(t => t.id === action.payload);
        if (todo) todo.completed = !todo.completed;
      },
      deleteTodo: (state, action: PayloadAction<number>) => {
        state.todos = state.todos.filter(t => t.id !== action.payload);
      },
      startEditTodo: (state, action: PayloadAction<number>) => {
        state.todos = state.todos.map(t =>
          t.id === action.payload ? { ...t, isEditing: true } : { ...t, isEditing: false }
        );
      },
      updateTodo: (state, action: PayloadAction<{ id: number; text: string }>) => {
        const todo = state.todos.find(t => t.id === action.payload.id);
        if (todo) {
          todo.text = action.payload.text;
          todo.isEditing = false;
        }
      },
      cancelEdit: (state) => {
        state.todos = state.todos.map(t => ({ ...t, isEditing: false }));
      }
    }
  });

export const { addTodo, toggleTodo, deleteTodo, startEditTodo, updateTodo, cancelEdit } = todoSlice.actions;
export default todoSlice.reducer;
