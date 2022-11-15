import { useContext } from "react"
import { provideContext } from "../hooks/context"

function Category({category}) {

  const {filterProducts} = useContext(provideContext)

  return (
    <>
      <button className="category"
              onClick={(e)=>filterProducts( e  , category)}
              >
        {category.substring(5).trim()}
      </button>
    </>
  )
}

export default Category
