const Product = (props) => {
  return (
    <div className="product-item">
      <img src={props.image} />
      <h3>{props.title.substring(0, 50)}</h3>

      <p>Price: ${props.price}</p>
    </div>
  );
};

export default Product;
