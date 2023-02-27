import allProducts from "../fake-data/all-products";

const Products = ({ category }) => {
  return allProducts.map((product) => {
    if (`FAKE: ${product.category}` === category) {
      return (
        <div className="product" key={product.id}>
          <img
            src={product.image}
            alt={product.title}
            className="product-image"
          />

          <span>{product.title}</span>
        </div>
      );
    } else if (category === "") {
      return (
        <div className="product" key={product.id}>
          <img
            src={product.image}
            alt={product.title}
            className="product-image"
          />

          <span>{product.title}</span>
        </div>
      );
    }
  });
};

export default Products;
