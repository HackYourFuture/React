import React from 'react'
import OneProduct from './OneProduct'
import productsList from '../fake-data/all-products'

export default function Products({ catType }) {
  let tempProducts = productsList.filter(item => item.category === catType)
  return (
    <>
      <div className='cards'>
        {
          catType ?
            <>
              {
                tempProducts.map((item) => {
                  return <OneProduct key={item.id} item={item} />
                })
              }
            </>
            :
            <>
              {
                productsList.map((item) => {
                  return <OneProduct key={item.id} item={item} />
                })
              }
            </>
        }
      </div>
    </>
  )
}