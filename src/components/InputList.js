import React from "react";

export default function InputList(props) {
  return (
    <div className="container my-6">
      <ul className="list-group list-group-flush">
        <li className="list-group-item"> {props.items}
          <span className="icons">
            <i className=" mx-5 fa-solid fa-trash-can icon-delete"
            onClick={(e)=>{
                props.deleteItem(props.index)
            }}></i>
          </span>
        </li>
       
      </ul>
      <hr/>
    </div>
  );
}
