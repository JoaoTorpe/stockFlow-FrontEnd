import React, { useEffect, useState } from 'react'
import "./Product.css"
import axios from 'axios'
import ProductLabel from '../components/ProductLabel'
import { json } from 'react-router-dom'

function generateLabel(props){

 return <ProductLabel name={props.name} price={props.price} quantity={props.quantity} category={props.category} supllier={props.supplie} totalValue={props.quantity * props.price} />
}

const Product = () => {


    const [productData,setProductData] = useState([])

    async function getProductData(){
try{
      const  Data = await axios.get("http://localhost:8080/products")
     setProductData(Data.data)
}
catch (error) {
  console.error(error);
}
  }
  useEffect(() => {
    getProductData();
  }, [productData]);
  return (
    <div className='productContainer'>
      { productData.map((p)=>generateLabel(p)) }
    </div>
  )
}

export default Product