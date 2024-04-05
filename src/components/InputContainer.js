import React, { useState } from "react";

export default function InputContainer(props) {
  const [inputText, SetInputText] = useState([]);
  const handleEnter =(e)=>{
    if(e.keyCode===13)
    {props.AddList(inputText);
    SetInputText("");}
  }
  return (
    <>
      <div className="container">
        <table>
          <tbody>
            <tr>
              <td>
                <input
                  type="text"
                  className="mx-auto form-control "
                  id="mediumInput"
                  placeholder="Enter task"
                  value={inputText}
                  onChange={(e) => {
                    SetInputText(e.target.value);
                  }}
                  onKeyDown={handleEnter}
                />
              </td>
              <td>
                <button
                  type="button"
                  onClick={() => {
                    props.AddList(inputText);
                    SetInputText("");
                  }}
                  className="btn btn-primary mx-3"
                 
                >
                  Add
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
