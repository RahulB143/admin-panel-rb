import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from "react";

function App() {
  const[responsive, setResponsive] = useState([])
  useEffect(() => {
    showDetails();
  } , [])
  const  showDetails = async () => {
    try {
      const response = await axios.get('http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D');
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className="App">
     <button onClick={showDetails}>Show Data</button>
    </div>
  );
}

export default App;
