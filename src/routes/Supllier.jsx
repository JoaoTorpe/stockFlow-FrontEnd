import React,{useState,useEffect} from 'react'
import '../components/ProductLabel.css'
import axios from 'axios'
import SupllierModal from '../components/Modals/SupllierModal'
import EditSupllierModal from '../components/Modals/EditSupllierModal'
import ProdList from '../components/ProdList'
const Supllier = () => {

  const [listIsOpen, setListOpen] = useState(false);
  const [productsList, setProductsList] = useState(null);
  async function getProducts(supId){
        setListOpen(true);

       const productsListData = await axios.get("http://localhost:8080/suplliers/products/"+supId)
        setProductsList(productsListData.data);
    
    }

  const [editIsOpen, setEditOpen] = useState(false);
    const [editProps, setEditProps] = useState({
      id:null,
      name:'',
    phone:'',
    email:''
    });
  function generatLabel(props){
    function handleEditClick(props) {
      setEditProps({
        id: props.id,
        name:props.name,
        phone:props.phone,
        email:props.email
      });
      setEditOpen(true);
    }

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
      <td> <a style={{ textDecoration: "underline" }} onClick={()=> getProducts(props.id)}  > Products</a>  </td>
    
      <th> <button onClick={(event)=>deleteItem(props.id)}  className='delBtn Btn'>Delete</button></th>
      </tr>

</table>
}

function deleteItem(id){
  axios.delete("http://localhost:8080/suplliers/"+id)
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
    <SupllierModal isOpen={isOpen} setopenModal={()=>setModal(!isOpen)}/>
    <EditSupllierModal  editProps={editProps} isOpen ={editIsOpen} setopenModal={()=>setEditOpen(!editIsOpen)}/>
    <ProdList isListOpen={listIsOpen} setListOpen={()=> setListOpen(!listIsOpen)} listData= {productsList} />
    </div>
  )
}

export default Supllier