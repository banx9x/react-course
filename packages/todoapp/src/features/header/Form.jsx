import { useContext, useState } from 'react';
import './Form.css';
import { TodoContext } from '../../contexts/TodoProvider';

function Form() {
  const { onAdd } = useContext(TodoContext);
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    onAdd(content);

    setContent('');
  };

  return (
    <form
      className='form'
      onSubmit={handleSubmit}>
      <input
        className='content'
        type='text'
        placeholder='What do you want to do?'
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
    </form>
  );
}

export default Form;
