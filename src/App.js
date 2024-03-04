import React,{useState} from 'react';
import './App.css';
import Accordian from './components/Accordian';


function App() {

  const[selected,setSelected]=useState(null)

  return <div>
    <Accordian/>
  </div>
}

export default App;
