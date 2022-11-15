import { createContext , useState } from "react";

import allProducts from '../fake-data/all-products'



export const provideContext = createContext()

const ProductContext = ({children}) => {
const [products , setProducts] = useState(allProducts)

  const filterProducts = (e , cate) => {
    const category = cate.substring(5).trim()

    //filter out the products to that related to clicked button
    const filteredProducts = allProducts.filter(product=> product.category === category)
    setProducts(filteredProducts)

    //activate the clicked button
    Array.from(e.target.parentNode.children).forEach(btn => {
      btn.classList.remove('active')
    })
    e.target.classList.add('active')
  }

  const value = {
    products,
    filterProducts
  }

  return(
    <provideContext.Provider value={value}>
      {children}
    </provideContext.Provider>
  )
}

export default ProductContext