import { useContext } from 'react';
import Button from '../../components/Button';
import './Actions.css';
import { TodoContext } from '../../contexts/TodoProvider';

function Actions() {
  const { onMarkAll, onDeleteAll } = useContext(TodoContext);

  return (
    <div className='footer-column'>
      <div className='footer-heading'>Quick actions</div>
      <div className='todo-actions'>
        <Button onClick={onMarkAll}>Mark all todo complete</Button>
        <Button onClick={onDeleteAll}>Delete all todo completed</Button>
      </div>
    </div>
  );
}

export default Actions;
