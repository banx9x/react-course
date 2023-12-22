function Pagination({ items, currentIndex, onClick }) {
  return (
    <div className='carousel-pagination'>
      {items.map((items, index) => (
        <div
          key={index}
          className={`carousel-pagination-item ${
            currentIndex === index ? 'active' : ''
          }`}
          onClick={() => onClick(index)}></div>
      ))}
    </div>
  );
}

export default Pagination;
