function product({product}) {
  const {title ,  image} = product

  return (
    <div className='product'>
      <img className="image" src={image} alt={title} />
      <h3 className="title">{title.substring(5)}</h3>
    </div>
  )
}

export default product