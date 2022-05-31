import React from 'react'

const ProductListItem = ({ product }) => {
    return (
        <li className='products-item'>
            <div className='products-item-content'>
                <img className='products-item-content-img' src={product.image} alt={product.title} />
                <span className='products-item-content-title' >{product.title}</span>
            </div>
        </li>
    )
}

export default ProductListItem