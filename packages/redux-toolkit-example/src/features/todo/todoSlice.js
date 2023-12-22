// Action Constants
// Action Creators
// Reducer
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    { id: 0, text: 'Learn React', completed: true },
    {
      id: 1,
      text: 'Learn Redux',
      completed: false,
      color: {
        id: 2,
        label: 'Purple',
        value: '#805AD5',
      },
    },
  ],
  filters: {
    status: 'All',
    colors: [],
  },
};

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    add(state, action) {
      state.items.push({
        id: Date.now(),
        text: action.payload.text,
        completed: false,
      });
    },

    toggle(state, action) {
      state.items = state.items.map((todo) =>
        todo.id === action.payload.id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo,
      );
    },

    changeColor(state, action) {
      state.items = state.items.map((todo) =>
        todo.id === action.payload.id
          ? {
              ...todo,
              color: action.payload.color,
            }
          : todo,
      );
    },

    filterStatus(state, action) {
      state.filters.status = action.payload.status;
    },

    filterColors(state, action) {
      state.filters.colors = action.payload.colors;
    },
  },
});

export const { add, toggle, filterStatus, filterColors } = todoSlice.actions;
