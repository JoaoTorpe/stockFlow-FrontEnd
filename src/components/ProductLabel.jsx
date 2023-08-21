import React from 'react'
import "./ProductLabel.css"
const ProductLabel = (props) => {
  return (
    <div className='label' >

<ul>
        <li>Name: {props.name} |</li>
        <li>Price: R${props.price} |</li>
        <li>Quantity: {props.quantity}|</li>
        <li>Category: {props.categorie}|</li>
        <li>Supplier: {props.supplier}|</li>
        <li>Total Value: R${props.totalValue}</li>
    </ul>
    </div>
  )
}

export default ProductLabel