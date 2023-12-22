import Content from './Content';

function Item({ image, title, description, active }) {
  return (
    <div
      className='carousel-item'
      style={{
        backgroundImage: `url(${image})`,
        display: active ? 'block' : 'none',
      }}>
      <Content
        title={title}
        description={description}
      />
    </div>
  );
}

export default Item;
