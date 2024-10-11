import React,{useState} from 'react';

const ListItem = (props) => {
  const [name, setname] = useState("")
  const [date, setdate] = useState("")
  const [governorate, setgovernorate] = useState("")
  const [show, setshow] = useState(false)
  
    
    


  return(
   <tr>
   <td>{props.element.name}</td>
    <td>{props.element.date.split('T')[0]}</td>
    <td>{props.element.governorate}</td>
    <td>
      <button className="delete" onClick={() => props.del(props.element.id)}>DELETE</button>
      <button className="update" onClick={()=>{setshow(!show)}}>update</button>
{show&&
<div> <input
            placeholder = "update name"
            onChange = {(e)=>{setname(e.target.value)}}
            />
            <input
            placeholder = "update governorate"
            onChange = {(e)=>{setgovernorate(e.target.value)}}
            />
              <input
              type="date"
            placeholder = "update date"
            onChange = {(e)=>{setdate(e.target.value)}}
            />
      <button className="update" onClick={() => {props.up(props.element.id,name,date,governorate) 
        setshow(!show)}}>UPDATE </button></div>}
    </td>
  </tr>
)}

export default ListItem;