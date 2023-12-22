import React from 'react';
import ProductCard from './ProductCard';

const Main = ({ products }) => {
  console.log(products);
  const productCards = products.map((product) => (
    <div
      key={product.name}
      className='col mb-5'>
      <ProductCard {...product} />
    </div>
  ));

  return (
    <main className='py-5'>
      <div className='container px-4 px-lg-5 mt-5'>
        <div className='row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center'>
          {productCards}
        </div>
      </div>
    </main>
  );
};

export default Main;
