import React from 'react';

function ProdList({ isListOpen, setListOpen, listData }) {
  const modalStyle = {
   
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: '1000',
    display: isListOpen ? 'block' : 'none',
  };

  const modalContentStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
    minHeight:'200px',
    width:'200px',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'column',
    gap:'30px'
  };

  const buttonStyle = {
    
    color: 'black',
    border: 'none',
    padding: '5px 10px',
    cursor: 'pointer',
    position: 'absolute',
    right: '3px',
    top:'4px'
  };

  function generateLi(item) {
    return <li style={{ listStyle:'none'}}  key={item.id}>{item.name}</li>;
  }

  return (
    <div>
      
      <div style={modalStyle}>
   
        <div style={modalContentStyle}>
        <h3>Supplier's products</h3>
          <button onClick={() => setListOpen(false)} style={buttonStyle}>
          x
          </button>
          <ul style={{position:'relative',right:'15px',gap:'5px' ,display:'flex',flexDirection:'column',alignItems:'center' }}  >
          { listData ?   listData.map((item) => generateLi(item)) : 'none' }</ul>
        </div>
      </div>
    </div>
  );
}

export default ProdList;
