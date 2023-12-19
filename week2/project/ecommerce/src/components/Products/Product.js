const Product = (props) => {
  const { image, title, price } = props;
  return (
    <div className="product-item">
      <img src={image} />
      <h3>{title.substring(0, 50)}</h3>

      <p>Price: ${price}</p>
    </div>
  );
};

export default Product;
