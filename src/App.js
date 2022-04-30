import React, { useState } from 'react'
import './App.css';
import Table from './Table';

function App() {
  const [show, setShow] = useState(true)
  function toggleTable() {
    setShow(s => !s);
  }
  return (
    <div className="App">
      <h1>Semantic Table</h1>

      {show && (<Table className='table'/>)}
      <div className='button_container'>
      <button className='button' onClick={toggleTable}>Show/Hide</button>

      </div>

    </div>
  );
}

export default App;
