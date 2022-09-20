import React from 'react'
export default function OneProducts({ item }) {
  const { title, image, description } = item
  return (
    <div className='one--item'>
      <div className='image'><img src={image} alt={description} />
      </div>
      <div className='product--title--div' ><span className='product--title'  >{title}</span ></div>
    </div>
  )
}