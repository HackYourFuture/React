import React from 'react'
import OneCategory from './OneCategory'
import categoriesList from '../fake-data/all-categories'
export default function Categories({ handlecategory ,category}) {
  return (
    <>
      <div className='categories'>
        {categoriesList.map((item) => {
          return <OneCategory key={item.id} item={item} handlecategory={handlecategory} category={category}/>
        })}
      </div>
    </>
  )
}