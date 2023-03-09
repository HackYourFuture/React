function Product({image, title, description}) {
    return (
      <li className='product-item'>
        <div className='product'>
          <img className='product-image' src={image} alt={description} />
          <span className='product-title' title={title}>{title}</span>
        </div>
      </li>
    )
  }

  export default Product