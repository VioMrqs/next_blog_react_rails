const Button = ({ onClick, text, type }) => {
  return (
    <button className="button" onClick={onClick} type={type}>
      {text}
    </button>
  );
};

export default Button;
