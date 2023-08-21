import React from 'react'
import "./Product.css"
import ProductLabel from '../components/ProductLabel'

const Product = () => {
  return (
    <div className='productContainer'>
    <ProductLabel name="Camisa" price="200.00" quantity="2" categorie="wear" supllier="amazon" totalValue="400.00" />
    <ProductLabel name="Camisa" price="200.00" quantity="2" categorie="wear" supllier="amazon" totalValue="400.00" />
    <ProductLabel name="Camisa" price="200.00" quantity="2" categorie="wear" supllier="amazon" totalValue="400.00" />
    <ProductLabel name="Camisa" price="200.00" quantity="2" categorie="wear" supllier="amazon" totalValue="400.00" />
    </div>
  )
}

export default Product