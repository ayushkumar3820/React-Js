import { useState } from 'react';

import './App.css'

function App() {
  


const [counter,setCounter]=useState(15);
const addValue=()=>{
  setCounter(counter=> counter + 1);
  setCounter(counter=> counter + 1);
  setCounter(counter=> counter + 1);
  setCounter(counter=> counter + 1);
  
}

const removeValue = () => {
  if (counter > 0) {
    setCounter(counter - 1);
  } else {
    console.log("Value cannot go negative");
  }
};

  return (
    <>
    
      <h1>Ayush </h1>
      <h1>counter Value {counter}</h1>
      <button  onClick={addValue} >add Value</button><br/>
      <button onClick={removeValue}>Remove value </button>
    
    </>
  )
}

export default App
