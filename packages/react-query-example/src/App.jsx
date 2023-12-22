import './App.css';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { Header } from './features/header/Header';
import TodoList from './features/todo/TodoList';
import Footer from './features/footer/Footer';

function App() {
  const client = useQueryClient();

  const { isLoading, isError, data, error } = useQuery('todos', () =>
    fetch('https://jsonserver-fhn2.onrender.com/api/todos').then((res) =>
      res.json(),
    ),
  );

  const mutation = useMutation(
    (title) =>
      fetch('https://jsonserver-fhn2.onrender.com/api/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title }),
      }).then((res) => res.json()),
    {
      onSuccess: (data) => {
        // Cho react-query biết là cần phải làm mới dữ liệu
        client.invalidateQueries(['todos']);
      },
      onError: (error) => {
        alert('Lỗi tạo todo', String(error.message));
      },
    },
  );

  return (
    <>
      <Header onSubmit={mutation.mutate} />
      <TodoList data={data} />
      <Footer />
    </>
  );
}

export default App;
