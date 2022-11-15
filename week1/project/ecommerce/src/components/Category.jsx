function Category({category}) {
  return (
    <>
      <button className="category">{category.substring(5)}</button>
    </>
  )
}

export default Category
