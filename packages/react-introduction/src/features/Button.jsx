const Button = ({ children, onClick }) => {
  // Khai báo hàm xử lý sự kiện
  function handleClick() {
    console.log('clicked');
  }

  return (
    <button
      // Gán thuộc tính sự kiện cho phần tử JSX
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
