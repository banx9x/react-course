import React, { useContext } from 'react';
import { TodoContext } from '../../contexts/TodoProvider';

function Filter() {
  const { filter, onFilter } = useContext(TodoContext);

  const handleChange = (e) => {
    const name = e.target.name;
    const check = e.target.checked;

    let value;

    if (name == 'status') {
      value = e.target.value;
    } else {
      if (check) {
        value = [...filter.colors, e.target.value];
      } else {
        value = filter.colors.filter((color) => color !== e.target.value);
      }
    }

    onFilter(name, value);
  };

  return (
    <>
      <form
        className='filter'
        onChange={handleChange}>
        <div className='footer-column'>
          <div className='footer-heading'>Filter by status</div>

          <div className='filter-item'>
            <input
              type='radio'
              name='status'
              id='all'
              value='all'
              checked={filter.status === 'all'}
            />
            <label htmlFor='all'>All</label>
          </div>

          <div className='filter-item'>
            <input
              type='radio'
              name='status'
              id='completed'
              value='completed'
              checked={filter.status === 'completed'}
            />
            <label htmlFor='completed'>Completed</label>
          </div>

          <div className='filter-item'>
            <input
              type='radio'
              name='status'
              id='active'
              value='active'
              checked={filter.status === 'active'}
            />
            <label htmlFor='active'>Active</label>
          </div>
        </div>

        <div className='footer-column'>
          <div className='footer-heading'>Filter by color</div>

          <div className='filter-item'>
            <input
              type='checkbox'
              name='colors'
              id='green'
              value='green'
              checked={filter.colors.includes('green')}
            />
            <label htmlFor='green'>Green</label>
          </div>

          <div className='filter-item'>
            <input
              type='checkbox'
              name='colors'
              id='blue'
              value='blue'
              checked={filter.colors.includes('blue')}
            />
            <label htmlFor='blue'>Blue</label>
          </div>

          <div className='filter-item'>
            <input
              type='checkbox'
              name='colors'
              id='yellow'
              value='yellow'
              checked={filter.colors.includes('yellow')}
            />
            <label htmlFor='yellow'>Yellow</label>
          </div>
        </div>
      </form>
    </>
  );
}

export default Filter;
