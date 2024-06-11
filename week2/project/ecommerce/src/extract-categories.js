import products from './fake-data/all-products.js';

const categories = [...new Set(products.map(product => product.category))];
console.log(categories);

const ensureFakeTitle = (product) => {
  if (!product.title.startsWith("FAKE: ")) {
    product.title = "FAKE: " + product.title;
  }
  return product;
};

const updatedProducts = products.map(ensureFakeTitle);
export default updatedProducts;
