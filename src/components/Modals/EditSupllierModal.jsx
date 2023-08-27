import React, { useEffect, useState } from 'react';
import './Modal.css'; 
import axios from 'axios';

function EditSupllierModal({editProps,isOpen,setopenModal}) {

  const [supllierObj,setSupllierObj] = useState( {
    name:'',
    phone:'',
    email:''

  })

      useEffect(()=>{

        setSupllierObj({
          name:editProps.name,
          phone:editProps.phone,
          email:editProps.email

        })

      },[editProps] )



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

      axios.put("http://localhost:8080/suplliers/"+editProps.id,supllierObj)
      .catch((err)=> console.error(err))


  };
if(isOpen){
  return (
    <div>
      

     
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={setopenModal}>&times;</span>
            <h2>Edit supllier</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" value={supllierObj.name}  required onChange={(event)=>setName(event.target.value)} autoComplete='off'  />

              <label htmlFor="phone">Phone:</label>
              <input type="text" id="phone" name="phone"  value={supllierObj.phone} required onChange={(event)=>setPhone(event.target.value)} autoComplete='off'  />

              <label htmlFor="quantity">Email:</label>
              <input type="text" id="email" name="email" value={supllierObj.email}  required onChange={(event)=>setEmail(event.target.value)}  autoComplete='off' />

             

              <button className='modalBtn' type="submit">Edit</button>
            </form>
          </div>
        </div>
   
    </div>
  );
}
}

export default EditSupllierModal;
