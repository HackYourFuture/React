import React from 'react'

function ProductItem({ product }) {
    return (
        <div className="product-card">
            <div className="image-container">
                <img
                    src={product.image}
                    alt={product.title}
                    onError={(e) => {
                        e.target.onerror = null; // Prevent infinite loop
                        // Use a placeholder if the original image fails
                        e.target.src = `https://placehold.co/400x400?text=${encodeURIComponent(product.title.substring(0, 20))}`;
                    }}
                />
            </div>
            <div className="product-details">
                <h3>{product.title}</h3>
                <p className="category">{product.category}</p>
                <div className="price-rating">
                    <span className="price">${product.price}</span>
                    {product.rating && (
                        <span className="rating">★ {product.rating.rate} ({product.rating.count})</span>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProductItem
