import { useState, useEffect } from 'react'
import CategoryList from '../components/CategoryList'
import ProductList from '../components/ProductList'

function Home() {
    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    // Fetch Categories
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await fetch('https://fakestoreapi.com/products/categories')
                if (!res.ok) throw new Error('Failed to fetch categories')
                const data = await res.json()
                setCategories(data)
            } catch (err) {
                console.error("Category fetch error:", err)
            }
        }
        fetchCategories()
    }, [])

    // Fetch Products (Server-side filtering)
    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true)
            setError(null)
            try {
                const url = selectedCategory
                    ? `https://fakestoreapi.com/products/category/${selectedCategory}`
                    : 'https://fakestoreapi.com/products'

                const res = await fetch(url)
                if (!res.ok) throw new Error('Failed to fetch products')
                const data = await res.json()
                setProducts(data)
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }
        fetchProducts()
    }, [selectedCategory])

    if (error) {
        return <div className="error-message">Error: {error}</div>
    }

    return (
        <div className="home-page">
            <header className="header">
                <h1>My E-commerce</h1>
                <CategoryList
                    categories={categories}
                    selectedCategory={selectedCategory}
                    onSelectCategory={setSelectedCategory}
                />
            </header>

            {loading ? (
                <div className="loading-spinner">Loading products...</div>
            ) : (
                <ProductList products={products} />
            )}
        </div>
    )
}

export default Home
