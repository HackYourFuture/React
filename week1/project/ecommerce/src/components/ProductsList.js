import React from 'react';
import allProducts from '../fake-data/all-products';

const ProductsList = (category) => {
  // console.log(category);
  const productsArray = [];
  const productName = allProducts.map((product) => `FAKE: ${product.category}`);
  const filteredProduct = productName.filter((product) => product === category);
  console.log('productName', productName);
  console.log('filteredProduct', filteredProduct);
  if (filteredProduct) {
    // const productImage = filteredProduct.map((product) => product.image);
    // console.log('productImage', productImage);
    // const productTitle = filteredProduct.map((product) => product.category);
    // const productId = filteredProduct.map((product) => product.id);
    // // console.log('productTitle', productTitle);
    allProducts.forEach(({ image, title, id }) => {
      productsArray.push(
        <div className="product-card" key={id}>
          <img src={image} alt={title} />
          <p>{title}</p>
        </div>,
      );
    });
  }
  return productsArray;
};

export default ProductsList;

// const categoryTitle = category

// allProducts.forEach(({ image, title, category }) => {
//   if (categoryTitle === category) {
//     productsArray.push(
//       <div className="card">
//         <img src={image} alt={title} />
//         <h4>{title}</h4>
//       </div>,
//     );
//   }
// });
