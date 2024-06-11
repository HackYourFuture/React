function ProductDetailPage({ activeProductInfo }) {

    return (
      <>
      <h1>{activeProductInfo.title}</h1>
      <div className='product-detail'>
        <p>{activeProductInfo.description}</p>
        <img src={activeProductInfo.image} alt={activeProductInfo.description}/>
      </div>
      </>
    )  
  }

  export default ProductDetailPage;