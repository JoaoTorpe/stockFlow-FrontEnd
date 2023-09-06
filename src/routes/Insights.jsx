import React, { useEffect, useState } from 'react'
import "./Insights.css"
import axios from 'axios';
 function Insights () {
  
    const [totalValue,setTotalValue] = useState('');


    async function  GetTotalValue(){
 try  {
        const data = await  axios.get("http://localhost:8080/products/total")
        setTotalValue(data.data)
 } 
        
        catch(err){
          console.error(err)
        }
    }

    useEffect(()=>{
      GetTotalValue();
    },[totalValue] )

  
  return (
    <div className='section'>
          <div className='smallContainer' > 
        <div className='smallBox'> <p>Total of suppliers</p> <span>3</span>  </div>
        <div className='smallBox'>  <p>Total of products</p> <span>4</span>     </div>
</div>


        <div className='largeBox' >   <p>Total stock value</p> <span>$ {totalValue}</span>       </div>
    
      </div>
  );
}

export default Insights