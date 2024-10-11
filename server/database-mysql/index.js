const mysql = require('mysql2');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'med',
  password : 'root',
  database : 'list'
}).promise();


connection.connect().then(()=>console.log("hmd 3lik"))
.catch((err)=>console.log(err)
)


const selectAll = () => {
  return  connection.query("SELECT * FROM users");
 
 };
 const add=(name,date,governorate)=>{  
  return   connection.query(`INSERT INTO users values (0,?,?,?)`,[name,date,governorate])
   
 }
 const del=(id)=>{
   return   connection.query(`DELETE FROM users WHERE id=?`,[id])
    
  }
  const up=(name,date,governorate,id)=>{
   return   connection.query(`UPDATE users SET name = ?, date = ?,governorate =? WHERE id=?;`,[name,date,governorate,id])}
 
 
   const one = (name) => {
    return  connection.query("SELECT * FROM users where name=?",[name]);
   
   };



module.exports= { selectAll,add,del,up,one };