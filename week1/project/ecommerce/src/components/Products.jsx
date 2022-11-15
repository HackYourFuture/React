import allProducts from '../fake-data/all-products'
import Categories from './Categories'
import Product from './Product'

function products() {
  return (
    <>
      <h1>Products</h1>
      <Categories />
      <div className='products_container'>
        {
          allProducts.map((product, index) => (
          <Product key={index} product={product}/> 
          ))
        }
      </div>
    </>
  )
}

export default products