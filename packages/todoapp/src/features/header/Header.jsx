import Form from './Form';
import './Header.css';

function Header() {
  return (
    <header className='header'>
      <h1 className='heading'>Simple Todo App</h1>

      <Form />
    </header>
  );
}

export default Header;
