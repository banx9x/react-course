import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import todoReducer from './features/todo/todoSlice.js';

export const store = createStore(
  combineReducers({
    todos: todoReducer,
  }),
  composeWithDevTools(),
);
