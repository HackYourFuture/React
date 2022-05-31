import React from 'react'
import allProducts from '../fake-data/all-products.js'
import ProductListItem from './ProductListItem.js'

const ProductList = ({ selectedCategory }) => {

    const handleProductsCategory = () => {
        const filteredProducts = allProducts.filter(
            product => product.category === selectedCategory
        )
        return filteredProducts;
    }

    const products = !selectedCategory ? allProducts : handleProductsCategory()



    return (
        <ul className='products'>
            {products.map((product) =>
                <ProductListItem product={product} key={product.id} />
            )}

        </ul>
    )
}

export default ProductList