import { useEffect, useState } from 'react';
import Button from './features/Button';
import Component from './features/Component';
import Counter from './features/Counter';
import Footer from './features/Footer';
import Header from './features/Header';
import Main from './features/Main';
import Nav from './features/nav/Nav';
import './styles.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import Carousel from './features/carousel/Carousel';
import Clock from './features/Clock';

const carousel = [
  {
    image:
      'https://1.bp.blogspot.com/-P4wpYIQ_Ag8/YCtiJIJabuI/AAAAAAAA7lQ/0ttciegq7_AT2246-FNi5W1f_H9l-oTxwCLcBGAsYHQ/s0/Cute-pho-mai-que-%2B%25281%2529.jpg',
    title: 'Hình ảnh cute phô mai que',
    description: 'Hình ảnh 1 con lợn con',
  },
  {
    image:
      'https://1.bp.blogspot.com/-nMoyJhfIVT4/YCtiOvI3BBI/AAAAAAAA7m4/Kzz_nE-m45wIKnFVOWo6HI8-tXU7BdIDwCLcBGAsYHQ/s0/Cute-pho-mai-que-%2B%25284%2529.jpg',
    title: 'Hình ảnh 2 con lợn',
    description: 'Hình ảnh 2 con lợn con',
  },
  {
    image:
      'https://i.pinimg.com/originals/02/72/0c/02720caf6cb8cd0bed63f7291a58e251.jpg',
    title: 'Ảnh cô gái',
    description: 'Ảnh cô gái nghệ thuật lấy trên google',
  },
  {
    image:
      'https://tokyocamera.vn/wp-content/uploads/2020/07/fujifilm-instax-mini-11-charcoal-gray-500x500-1.jpg',
    title: 'Máy ảnh instax',
    description: 'Máy ảnh instax 11 lấy từ Google',
  },
];

function App() {
  const [{ products, loading, error }, setData] = useState({
    products: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch('https://dummyjson.com/products');

      if (!res.ok) {
        setData({
          products: [],
          loading: false,
          error: 'Khong tai duoc du lieu san pham',
        });
      } else {
        const json = await res.json();

        setData({
          products: json.products,
          loading: false,
          error: null,
        });
      }
    };

    getProducts();
  }, []);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <Header />
      <Main products={products} />
      <Footer />
    </>
  );
}

export default App;
