import { useState } from 'react';
import './App.css';

function App() {
  const[counter,setCounter] = useState (0);

  
  const increment=() =>{
    setCounter(counter + 1);
  };

  const decrement=()=>{
    setCounter(counter - 1);
  }

  const reset=()=>{
    setCounter(0);
  }

  const getcolor= () => {
    if(counter<0)
    return 'red';
    else if (counter > 0)
    return 'green'
    else 
    return 'black'
  };
  return (
  <>
  <div className='main'>
  <h1>Counter</h1>

  <div className='counter' style={{color: getcolor()}}>
    <span className='count'>{counter}</span>
  </div>
  <div className='buttons'>
    <button className='dec' onClick={decrement}>Decrease</button>
    <button className='rest' onClick={reset}>Reset</button>
    <button className='incr' onClick={increment}>Increase</button>
  </div></div>
  </>
  );
}

export default App;
