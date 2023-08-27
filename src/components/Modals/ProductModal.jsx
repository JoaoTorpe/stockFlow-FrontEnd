import React, { useState } from 'react';
import './Modal.css'; 
import axios from 'axios';

function ProductModal({isOpen,setopenModal}) {

  const [productObj,setProductObj] = useState( {
    name:'',
    category:'',
    price:'',
    quantity:''

  })

      function setName(newName){
          setProductObj({...productObj,name:newName})
      }
      function setCategory(newCategory){
        setProductObj({...productObj,category:newCategory})
    }
    function setPrice(newPrice){
      setProductObj({...productObj,price:newPrice})
    }
    function setQuant(newQuant){
      setProductObj({...productObj,quantity:newQuant})
    }
    function setSupllier(newSup){
      setProductObj({...productObj,sup:newQuant})
    }
    const closeModal = () => {
        setopenModal(false); 
      };

  const handleSubmit = (event) => {
   
    closeModal(); 

      axios.post("http://localhost:8080/products",productObj)
      .catch((err)=> console.error(err))


  };
if(isOpen){
  return (
    <div>
      

     
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={setopenModal}>&times;</span>
            <h2>Adicionar Produto</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required onChange={(event)=>setName(event.target.value)} autoComplete='off'  />

              <label htmlFor="price">Price:</label>
              <input type="number" id="price" name="price" required onChange={(event)=>setPrice(event.target.value)} />

              <label htmlFor="quantity">Quantity:</label>
              <input type="number" id="quantity" name="quantity" required onChange={(event)=>setQuant(event.target.value)}  />

              <label htmlFor="category">Category:</label>
              <input type="text" id="category" name="category" required onChange={(event)=>setCategory(event.target.value)} autoComplete='off' />

              <label htmlFor="supplier">Supllier:</label>
              <input type="text" id="supplier" name="supplier"  autoComplete='off' />

              <button className='modalBtn' type="submit">Save</button>
            </form>
          </div>
        </div>
   
    </div>
  );
}
}

export default ProductModal;
