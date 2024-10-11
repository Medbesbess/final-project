import React,{useState} from 'react'

function Add(props) {

    const [name, setname] = useState("")
    const [date, setdate] = useState("")
    const [governorate, setgovernorate] = useState("")
    let newpersone = {
        name: name,
        date: date,
        governorate:governorate
    }
  return (
    <div className='contanir'>
           <div className='item'> <input
            type='text'
            placeholder = "enter name"
            onChange = {(e)=>{setname(e.target.value)}}
            /></div>
             <div className='item'><input
            placeholder = "enter governorate"
            onChange = {(e)=>{setgovernorate(e.target.value)}}
            /></div>
            <div className='item'> <input
             type='date'
            placeholder = "enter inscription date"
            onChange = {(e)=>{setdate(e.target.value)}}
            /></div>
             
            <div className='item'>
            <button className="update" onClick = {()=>{props.creat(newpersone)
             
            }}>add</button></div>
        </div>
  )
}

export default Add