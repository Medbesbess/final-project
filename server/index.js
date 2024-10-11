const express = require("express");
const cors = require ("cors")

const {selectAll,add,del,up,one}=require('../server/database-mysql')

const db = require('./database-mysql');


const app = express();
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));


app.get("/api/list",async function (req, res) {
try {const result= await selectAll()
  res.status(200).json(result[0])
  
} catch (error) {
  console.log(error);
  
  res.status(500).json(error)
  
}
 });



 app.post("/api/list",async function (req, res) {
  try {
    const result= await add(req.body.name,req.body.date,req.body.governorate)
  res.status(200).json("added")
  } catch (error) {
    console.log(error);
  
  res.status(500).json(error)
  
  }
 })
 app.delete("/api/:id",async function (req, res) {
try {
  const result= await del(req.params.id)
  res.status(200).json("deleted")
} catch (error) {
  res.status(500).json(error)
}
 })
 app.put("/api/:id",async function (req, res) {
  try {
    const result= await up(req.body.name,req.body.date,req.body.governorate,req.params.id)
    res.status(200).json("updated")
  } catch (error) {
    console.log(error);
    
    res.status(500).json(error)
  }
   })

   app.get("/api/:name",async function (req, res) {
    try {const result= await one(req.params.name)
      res.status(200).json(result[0])
      
    } catch (error) {
      console.log(error);
      
      res.status(500).json(error)
      
    }
     });






app.listen(PORT, function () {
  console.log("listening on port 3000!");
});
