import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todo',
  initialState: JSON.parse(localStorage.getItem('todos') || '[]'),
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        text: action.payload.text,
        completed: action.payload.completed,
      };
      state.push(newTodo);
      localStorage.setItem('todos', JSON.stringify(state));
    },
    toggleTodo: (state, action) => {
      const todo = state.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
        localStorage.setItem('todos', JSON.stringify(state));
      }
    },
    deleteTodo: (state, action) => {
      const id = action.payload;
      const updatedTodos = state.filter(todo => todo.id !== id);
      localStorage.setItem('todos', JSON.stringify(updatedTodos));
      return updatedTodos;
    },
    setTodos: (state, action) => {
      localStorage.setItem('todos', JSON.stringify(action.payload));
      return action.payload;
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo, setTodos } = todoSlice.actions;

export default todoSlice.reducer;