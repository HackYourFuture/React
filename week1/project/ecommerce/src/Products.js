import React from 'react';
import productsData from './fake-data/all-products.js';
import './styles/products.css'

function AllProducts({ selectedCategory }) {

    const cleanSelectedCategory = selectedCategory.replace('FAKE: ', '');

    //filter products according to selected category (if) // filteredProductsData <=> productsData
    const filteredProductsData =
        selectedCategory ?
            productsData.filter(item => {
                console.log('item.category:', item.category);
                return item.category === cleanSelectedCategory
            }) : productsData;


    return (
        <div className="products-container">

            {filteredProductsData.map((item) => {

                return (
                    <div key={item.id} className="productCard">
                        <img src={item.image} alt={item.title} />
                        <h3>{item.title}</h3>
                        <p>${item.price}</p>
                    </div>
                )
            })}

        </div>
    );
}

export default AllProducts;
