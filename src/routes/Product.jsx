import React, { useEffect, useState } from 'react'
import "./Product.css"
import axios from 'axios'
import { json } from 'react-router-dom'
import "../components/ProductLabel.css"
import ProductModal from '../components/Modals/ProductModal'
import EditProductModal from '../components/Modals/EditProductModal'
const Product = () => {
  const [id,setId] = useState('')
  const [editIsOpen, setEditOpen] = useState(false);
  const [editProps, setEditProps] = useState({
    name: '',
    category: '',
    price: '',
    quantity: '',
    id: ''
  });

  

  function handleEditClick(props) {


    setEditProps({
      name: props.name,
      category: props.category,
      price: props.price,
      quantity: props.quantity,
      id: props.id
    });
    setEditOpen(true);
  }

  function generateLabel(props){
    let SupName = 'N/A'
      if(props.supllie != null  ){
     SupName= props.supllie.name
      }
        return <table>
        <tr>
        <th>Name</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Category</th>
        <th>Supplier</th>
        <th>Total value</th>
        <th> <button onClick={()=>handleEditClick(props)} className='editBtn Btn'>Edit</button></th>
        </tr>
        <tr>
          <td>{props.name}</td>
          <td>{"R$ "+props.price}</td>
          <td>{props.quantity}</td>
          <td>{props.category}</td>
          <td>{SupName}</td>
          
          <td>{"R$ "+props.quantity * props.price}</td>
          <th> <button onClick={()=>deleteItem(props.id)}  className='delBtn Btn'>Delete</button></th>
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
      <ProductModal entityId={id} isOpen ={isOpen} setopenModal={()=>setModal(!isOpen)}/>
      <EditProductModal editProps={editProps} isOpen ={editIsOpen} setopenModal={()=>setEditOpen(!editIsOpen)}  />
    </div>
  )
}

export default Product