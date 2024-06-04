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
// updatedProducts.forEach(product => console.log(product.title));
export default updatedProducts;




// const ensureFakeTitle = (product) => {
//   if (!product.title.startsWith("FAKE: ")) {
//     product.title = "FAKE: " + product.title;
//   }
//   return product;
// };
// const updatedProducts = products.map(ensureFakeTitle);
// console.log(JSON.stringify(updatedProducts, null, 2));




