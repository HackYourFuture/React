function ProductCard({ product }) {
  const { title, image, price } = product;

  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{price}</p>
    </div>
  );
}

export default ProductCard;
