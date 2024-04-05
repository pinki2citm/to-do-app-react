import { useState } from "react";
import "./App.css";
import InputContainer from "./components/InputContainer";
import InputList from "./components/InputList";

function App() {
  const [List,SetList] =useState([]);
  let AddList = (inputText)=>{
    if(inputText!=='')
    SetList ([...List,inputText]);
  }
  const deleteItem =(key)=>{
    let newList =[...List];
    newList.splice(key,1);
    SetList([...newList]);
  }
  return (
    <>
    <center><h1 className="mx-5 my-5">To-do List App</h1>
    <div className="container my-5">
      <InputContainer AddList={AddList}/>
      {List.map((ListItem,i)=>{
        return (
          <InputList key={i} index={i} items={ListItem}
          deleteItem ={deleteItem}/>
        )
      })}
    </div>
    </center>
    </>
  );
}

export default App;
