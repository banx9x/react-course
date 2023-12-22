import Button from '../../components/Button';
import { AiOutlineClose } from 'react-icons/ai';
import './TodoItem.css';
import { useContext } from 'react';
import { TodoContext } from '../../contexts/TodoProvider';

function TodoItem({ todo }) {
  const { onDelete, onMark } = useContext(TodoContext);

  return (
    <div className='todo-item'>
      <div className='todo-info'>
        <input
          className='status'
          type='checkbox'
          checked={todo.status}
          onChange={() => onMark(todo.id)}
        />

        <span className='content'>{todo.content}</span>
      </div>

      <div className='todo-action'>
        <div className='color-picker'>Pick color</div>
        <Button onClick={() => onDelete(todo.id)}>
          <AiOutlineClose />
        </Button>
      </div>
    </div>
  );
}

export default TodoItem;
