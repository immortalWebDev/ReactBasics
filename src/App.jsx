import React,{useState} from 'react';

import './App.css'

const App = () => {

  const [counter, setCounter] = useState(0);
  
  const addValue = () => {
    
    if(counter > 20)
    return
    else
    {
      setCounter((prevCounter) => prevCounter + 1) 
      setCounter((prevCounter) => prevCounter + 1) 
      setCounter((prevCounter) => prevCounter + 1) 
    }
    
  
  };
 
  const removeValue = () => {

    if(counter < 0)
    return
    else 
    {
      setCounter((prevCounter) => prevCounter - 1) 
      setCounter((prevCounter) => prevCounter - 1) 
      setCounter((prevCounter) => prevCounter - 1) 
    }

  }

  return (
    <>
      <h1>Counter Project</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={addValue}>Add</button>
      <br></br><br></br>
      <button onClick={removeValue}>Remove</button>
    </>
  );
};

export default App;
