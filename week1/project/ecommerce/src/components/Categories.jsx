import allCategories from "../fake-data/all-categories"

import Category from "./Category"

function Categories() {
  
  return (
    <div className="categories_container"> 
      {
        allCategories.map((category, index) => (
          <Category key={index} category={category} />
        ))
      }
    </div>
  )
}

export default Categories
