import React,{useState,useEffect} from 'react'
import '../components/ProductLabel.css'
import {json} from 'react-router-dom'
import axios from 'axios'
import SupllierModal from '../components/Modals/SupllierModal'
const Supllier = () => {
  
  function generatLabel(props){

    

    return <table>
    <tr>
    <th>Name</th>
    <th>Phone</th>
    <th>Email</th>
    <th>Products</th>
    <th> <button onClick={()=>handleEditClick(props)} className='editBtn Btn'>Edit</button></th>
    </tr>
    <tr>
      <td>{props.name}</td>
      <td>{props.phone}</td>
      <td>{props.email}</td>
      <td> <a style={{ textDecoration: "underline" }} > Products</a>  </td>
    
      <th> <button onClick={(event)=>deleteItem(props.id)}  className='delBtn Btn'>Delete</button></th>
      </tr>

</table>
}

function deleteItem(id){
  axios.delete("http://localhost:8080/splliers/"+id)
  .catch(erro => console.error(erro))
}

const [supllierData,setSupllierData] = useState([])

async function getSupllierData(){
try{
  const  Data = await axios.get("http://localhost:8080/suplliers")
  setSupllierData(Data.data)
}
catch (error) {
console.error(error);
}
}
useEffect(()=>{

  getSupllierData();

},[supllierData])

const [isOpen,setModal] = useState(false);

  return (
    <div className='productContainer'  >
     <button onClick={()=>setModal(true)}  className='addModal'>+</button>
  {supllierData.map((p)=> generatLabel(p))}
    <SupllierModal isOpen={isOpen} setopenModal={()=>setModal(!isOpen)}   />
    </div>
  )
}

export default Supllier