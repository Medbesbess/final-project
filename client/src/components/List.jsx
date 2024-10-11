import React from "react";
import ListItem from "./ListItem.jsx";

const List = (props) => (
  <div>
    
    <div className="table-container">
    

      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th  >Date </th>
            <th>Gouvernorat</th>
            <th>EDITE</th>
          </tr>
        </thead>
        <tbody>
          {props.list.map((element, index) => (
     <ListItem key={index} element={element} del={props.del} up={props.up}/>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default List;
