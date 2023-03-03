import './Products.css';

const Product = (props) => {
    return (
      <li key={props.id} className='product-item'>
        <div className='product'>
          <img className='product-image' src={props.image} alt={props.description} />
          <span className='product-title' title={props.title}>{props.title}</span>
        </div>
      </li>
    )
  }
  
  const ProductsList = (props) => {
    const {products, state} = props;

    const filter = state.isAll ? '' : state.selectedCategory

    const filteredList = 
      filter ? products.filter(product => product.category === filter) : products

    return (
      <ul className='products-list'>
        { filteredList.map(product => Product(product)) }
      </ul>
    )
  }

export default ProductsList;