import React from 'react';

// props = { thumbnail: "", name: "", variants: [ {originPrice: 123, salePrice: 100} ], isSale: true, reviews: 4.5 }

const ProductCard = ({
  thumbnail,
  name,
  isSale,
  reviews,
  price,
  discountPercentage,
}) => {
  return (
    <div className='card h-100'>
      {/* Sale badge*/}
      {isSale && (
        <div
          className='badge bg-dark text-white position-absolute'
          style={{ top: '0.5rem', right: '0.5rem' }}>
          Sale
        </div>
      )}
      {/* Product image*/}
      <img
        className='card-img-top'
        src={thumbnail}
        alt={name}
      />
      {/* Product details*/}
      <div className='card-body p-4'>
        <div className='text-center'>
          {/* Product name*/}
          <h5 className='fw-bolder'>{name}</h5>
          {/* Product reviews*/}
          <div className='d-flex justify-content-center small text-warning mb-2'>
            <div className='bi-star-fill' />
            <div className='bi-star-fill' />
            <div className='bi-star-fill' />
            <div className='bi-star-fill' />
            <div className='bi-star-fill' />
          </div>
          {/* Product price*/}
          <span className='text-muted text-decoration-line-through'>
            ${price}
          </span>
          - ${(price - (price * discountPercentage) / 100).toFixed(2)}
        </div>
      </div>
      {/* Product actions*/}
      <div className='card-footer p-4 pt-0 border-top-0 bg-transparent'>
        <div className='text-center'>
          <a
            className='btn btn-outline-dark mt-auto'
            href='#'>
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
