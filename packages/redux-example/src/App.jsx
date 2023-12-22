import { Container } from '@chakra-ui/react';
import { Header } from './features/header/Header';
import TodoList from './features/todo/TodoList';
import Footer from './features/footer/Footer';

function App() {
  return (
    <Container maxWidth={'2xl'}>
      <Header />
      <TodoList />
      <Footer />
    </Container>
  );
}

export default App;
