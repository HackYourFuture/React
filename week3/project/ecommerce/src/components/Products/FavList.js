import Product from "./Product";

const FavList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <Product
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          image={product.image}
        />
      ))}
    </div>
  );
};

export default FavList;
