import React, { useState } from 'react';
import './Modal.css'; 

function ProductModal({isOpen,setopenModal}) {
  

    const closeModal = () => {
        setopenModal(false); 
      };

  const handleSubmit = (event) => {
    event.preventDefault();
    closeModal(); 
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
              <input type="text" id="name" name="name" required />

              <label htmlFor="price">Preço:</label>
              <input type="number" id="price" name="price" required />

              <label htmlFor="quantity">Quantidade:</label>
              <input type="number" id="quantity" name="quantity" required />

              <label htmlFor="category">Categoria:</label>
              <input type="text" id="category" name="category" required />

              <label htmlFor="supplier">Fornecedor:</label>
              <input type="text" id="supplier" name="supplier" required />

              <button className='modalBtn' type="submit">Salvar</button>
            </form>
          </div>
        </div>
   
    </div>
  );
}
}

export default ProductModal;
