import React, { useEffect, useState } from 'react'
import "./Product.css"
import axios from 'axios'
import { json } from 'react-router-dom'
import "../components/ProductLabel.css"
import ProductModal from '../components/Modals/ProductModal'

const Product = () => {

  function generateLabel(props){
        return <table>
        <tr>
        <th>Name</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Category</th>
        <th>Supllier</th>
        <th>Total value</th>
        <th> <button className='editBtn Btn' >Edit</button></th>
        </tr>
        <tr>
          <td>{props.name}</td>
          <td>{"R$ "+props.price}</td>
          <td>{props.quantity}</td>
          <td>{props.category}</td>
          <td>{props.supplie ? props.supplie : 'N/A' }</td>
          <td>{"R$ "+props.quantity * props.price}</td>
          <th> <button onClick={(event)=>deleteItem(props.id)}  className='delBtn Btn'>Delete</button></th>
          </tr>
    
    </table>
    }

    function deleteItem(id){
      axios.delete("http://localhost:8080/products/"+id)
      .catch(erro => console.error(erro))
    }

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

  const [isOpen,setModal] = useState(false);

  return (
    <div className='productContainer'>
      { productData.map((p)=>generateLabel(p)) }
      <button onClick={()=>setModal(true)}  className='addModal'>+</button>
      <ProductModal isOpen ={isOpen} setopenModal={()=>setModal(!isOpen)}/>
    </div>
  )
}

export default Product