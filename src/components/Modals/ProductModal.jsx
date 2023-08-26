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
              <label htmlFor="name">Nome:</label>
              <input type="text" id="name" name="name" required onChange={(event)=>setName(event.target.value)} />

              <label htmlFor="price">Preço:</label>
              <input type="number" id="price" name="price" required onChange={(event)=>setPrice(event.target.value)} />

              <label htmlFor="quantity">Quantidade:</label>
              <input type="number" id="quantity" name="quantity" required onChange={(event)=>setQuant(event.target.value)}  />

              <label htmlFor="category">Categoria:</label>
              <input type="text" id="category" name="category" required onChange={(event)=>setCategory(event.target.value)}  />

              <label htmlFor="supplier">Fornecedor:</label>
              <input type="text" id="supplier" name="supplier"/>

              <button className='modalBtn' type="submit">Salvar</button>
            </form>
          </div>
        </div>
   
    </div>
  );
}
}

export default ProductModal;
