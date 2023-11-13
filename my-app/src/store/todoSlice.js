import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
  },
  reducers: {
    addTdod(state, action) {
      state.todos.push({
        id: new Date().toISOString(),
        text,
        isCompleted: false,
      });
    },
    removeTodo(state, action) {},
    toggleIsTodoCompleted(state, action) {},
  },
});
