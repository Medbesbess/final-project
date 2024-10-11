import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import List from './components/List.jsx'
import Add from "./components/Add.jsx"

const App = () => {
  const [list, setlist] = useState([])
 const [refr, setrefr] = useState(false)
 const [cher, setcher] = useState("")
 const [view, setview] = useState(true)
 
  useEffect(async() => {
    console.log(list);
    
    try {
      const response = await axios.get('http://127.0.0.1:3000/api/list');
      
      
      setlist(response.data)
    } catch (error) {
      console.error(error)
    }
  
}, [refr])

async function creat(item) {
  try {
    const response = await axios.post('http://127.0.0.1:3000/api/list',item);
    setview(true)
    setrefr(!refr)
  } catch (error) {
    console.error(error)
  }
}

async function del(id) {
  try {
    const response = await axios.delete(`http://127.0.0.1:3000/api/${id}`);
   
    setrefr(!refr)
  } catch (error) {
    console.error(error)
  }
}
async function up(id,name,date,governorate) {
  try {
    const response = await axios.put(`http://127.0.0.1:3000/api/${id}`,{name,date,governorate});
    
    setrefr(!refr)
  } catch (error) {
    console.error(error)
  }
}
async function one(name) {
  try {
    const response = await axios.get(`http://127.0.0.1:3000/api/${name}`)
    setlist(response.data)
  } catch (error) {
    console.error(error)
  }
}

return (
  <div>
   
    <div className="navbar">
      <button onClick={() => {
         setview(true) 
         setrefr(!refr)}}>🔁</button>
      <input
        type="text"
        placeholder="chercher by name"
        onChange={(e) => setcher(e.target.value)}
      />
      <button className="update" onClick={() => one(cher)}>CHERCHE</button>
      <button className="update" onClick={() => setview(false)}>add</button>

    </div>

    {!view&&<Add creat={creat} />}
   {view&&<List list={list} del={del} up={up} />}
  </div>
);
};

ReactDOM.render(<App />, document.getElementById('app'))
