import { useContext } from "react";
import { provideContext } from '../hooks/context'

import Categories from './Categories'
import Product from './Product'


function Products() {

  const {products} = useContext(provideContext)

  return (
    <>
      <h1 className="title">Products</h1>
      <Categories />
      <div className='products_container'>
        {
          products.map((product) => (
          <Product key={product.id} product={product}/> 
          ))
        }
      </div>
    </>
  )
}

export default Products