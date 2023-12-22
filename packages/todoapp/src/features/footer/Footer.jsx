import { useContext } from 'react';
import Actions from './Actions';
import Filter from './Filter';
import './Footer.css';
import { TodoContext } from '../../contexts/TodoProvider';

function Footer() {
  const { remaining } = useContext(TodoContext);
  return (
    <footer className='footer'>
      <Actions />

      <div className='footer-column'>
        <div className='footer-heading'>Remaining</div>

        <span className='remaining'>{remaining} remaining todos</span>
      </div>

      <Filter />
    </footer>
  );
}

export default Footer;
