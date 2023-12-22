import { createContext, useReducer } from 'react';
import { todoReducer } from '../reducers/todoReducer';

export const TodoContext = createContext();

const initialState = {
  todos: [],
  filter: {
    status: 'all',
    colors: [],
  },
};

export default function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = (content) => {
    dispatch({ type: 'ADD_TODO', payload: { content } });
  };

  const setFilter = (name, value) => {
    dispatch({ type: 'SET_FILTER', payload: { name, value } });
  };

  const markAll = () => {
    if (confirm('Đánh dấu tất cả là hoàn thành?'))
      dispatch({ type: 'MARK_ALL_COMPLETED' });
  };

  const deleteAllCompleted = () => {
    if (confirm('Xóa tất cả công việc đã hoàn thành?'))
      dispatch({ type: 'DELETE_ALL_COMPLETED' });
  };

  const deleteTodoById = (id) => {
    if (confirm('Xóa công việc?'))
      dispatch({ type: 'REMOVE_TODO', payload: { id } });
  };

  const markItem = (id) => {
    dispatch({ type: 'UPDATE_STATUS', payload: { id } });
  };

  // Lọc theo status
  let filteredTodos =
    state.filter.status === 'all'
      ? state.todos
      : state.filter.status === 'completed'
      ? state.todos.filter((todo) => todo.status)
      : state.todos.filter((todo) => !todo.status);

  // Lọc tiếp theo màu
  filteredTodos =
    state.filter.colors.length === 0
      ? filteredTodos
      : filteredTodos.filter((todo) =>
          state.filter.colors.includes(todo.color),
        );
  const remaining = state.todos.filter((todo) => !todo.status).length;

  return (
    <TodoContext.Provider
      value={{
        todos: filteredTodos,
        filter: state.filter,
        remaining,
        onAdd: addTodo,
        onFilter: setFilter,
        onMarkAll: markAll,
        onDeleteAll: deleteAllCompleted,
        onDelete: deleteTodoById,
        onMark: markItem,
      }}>
      {children}
    </TodoContext.Provider>
  );
}
