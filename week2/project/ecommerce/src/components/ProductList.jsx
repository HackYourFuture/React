import React from 'react'
import ProductItem from './ProductItem'

function ProductList({ products }) {
    return (
        <main className="product-grid">
            {products.map(product => (
                <ProductItem key={product.id} product={product} />
            ))}
        </main>
    )
}

export default ProductList
