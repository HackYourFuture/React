import './Products.css';
import Product from './Product'

  function Products({products, state}) {

    const categoryName = state.isAll ? '' : state.selectedCategory.slice(6)

    const filteredList = 
      categoryName ? products.filter(product => product.category === categoryName) : products

    return (
      <ul className='products-list'>
        { filteredList.map(product => 
          <Product key={product.id} image={product.image} title={product.title} description={product.description}/> ) }
      </ul>
    )
  }

export default Products;