import React, { useState } from 'react';
import './Modal.css'; 
import axios from 'axios';

function SupllierModal({isOpen,setopenModal}) {

  const [supllierObj,setSupllierObj] = useState( {
    name:'',
    phone:'',
    email:''

  })

      function setName(newName){
          setSupllierObj({...supllierObj,name:newName})
      }
      function setPhone(newPhone){
        setSupllierObj({...supllierObj,phone:newPhone})
    }
    function setEmail(newEmail){
      setSupllierObj({...supllierObj,email:newEmail})
    }
  
   
    const closeModal = () => {
        setopenModal(false); 
      };

  const handleSubmit = () => {
   
    closeModal(); 

      axios.post("http://localhost:8080/suplliers",supllierObj)
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

              <label htmlFor="phone">Phone:</label>
              <input type="text" id="phone" name="phone" required onChange={(event)=>setPhone(event.target.value)} autoComplete='off'  />

              <label htmlFor="quantity">Email:</label>
              <input type="text" id="email" name="email" required onChange={(event)=>setEmail(event.target.value)}  autoComplete='off' />

             

              <button className='modalBtn' type="submit">Save</button>
            </form>
          </div>
        </div>
   
    </div>
  );
}
}

export default SupllierModal;
