import './App.css';
import TodoProvider, { TodoContext } from './contexts/TodoProvider';
import Footer from './features/footer/Footer';
import Header from './features/header/Header';
import TodoList from './features/todolist/TodoList';

function App() {
  return (
    <div className='container'>
      <TodoProvider>
        <Header />
        <TodoList />
        <Footer />
      </TodoProvider>
    </div>
  );
}

export default App;
