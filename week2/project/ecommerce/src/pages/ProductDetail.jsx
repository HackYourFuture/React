import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function ProductDetail() {
    const { id } = useParams()
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchProduct = async () => {
            setLoading(true)
            setError(null)
            try {
                const res = await fetch(`https://fakestoreapi.com/products/${id}`)
                if (!res.ok) throw new Error('Failed to fetch product')
                const data = await res.json()
                setProduct(data)
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }
        fetchProduct()
    }, [id])

    if (loading) return <div className="loading-spinner">Loading product details...</div>
    if (error) return <div className="error-message">Error: {error}</div>
    if (!product) return <div>Product not found</div>

    return (
        <div className="product-detail-page">
            <div className="product-detail-container">
                <img src={product.image} alt={product.title} className="detail-image" />
                <div className="detail-info">
                    <h2>{product.title}</h2>
                    <p className="detail-category">{product.category}</p>
                    <p className="detail-description">{product.description}</p>
                    <p className="detail-price">${product.price}</p>
                    <div className="detail-rating">
                        Rating: {product.rating?.rate} ({product.rating?.count} reviews)
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail
