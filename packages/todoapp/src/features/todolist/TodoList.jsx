import TodoItem from './TodoItem';
import './TodoList.css';
import { useContext } from 'react';
import { TodoContext } from '../../contexts/TodoProvider';

function TodoList() {
  const { todos } = useContext(TodoContext);

  return (
    <div className='todo-list'>
      {todos.map((item) => (
        <TodoItem
          key={item.id}
          todo={item}
        />
      ))}
    </div>
  );
}

export default TodoList;
