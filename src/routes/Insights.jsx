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

    const [totalProducts,setTotalProducts] = useState(0);
    async function  GetTotalProductsQuantity(){
      try  {
             const data = await  axios.get("http://localhost:8080/products/quant")
             setTotalProducts(data.data)
      } 
             
             catch(err){
               console.error(err)
             }
         }
     
         useEffect(()=>{
          GetTotalProductsQuantity();
         },[totalProducts] )

         const [totalSuppliers,setTotalSuppliers] = useState(0);
         async function  GetTotalSuppliersQuantity(){
           try  {
                  const data = await  axios.get("http://localhost:8080/suplliers/quant")
                  setTotalSuppliers(data.data)
           } 
                  
                  catch(err){
                    console.error(err)
                  }
              }
          
              useEffect(()=>{
                GetTotalSuppliersQuantity();
              },[totalSuppliers] )


  
  return (
    <div className='section'>
          <div className='smallContainer' > 
        <div className='smallBox'> <p>Total of suppliers</p> <span>{totalSuppliers}</span>  </div>
        <div className='smallBox'>  <p>Total of products</p> <span>{totalProducts}</span>     </div>
</div>


        <div className='largeBox' >   <p>Total stock value</p> <span>$ {totalValue ? totalValue : '0'}</span>       </div>
    
      </div>
  );
}

export default Insights