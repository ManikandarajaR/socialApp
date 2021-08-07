//import './App.css';
//import Navbar from './components/navbar';
//import Button from './components/button';

import React,{useState} from 'react';



function App() {

  const url = "";

  const [data, setdata] = useState(
    {
      name : "",
      lname : "",
      city:""
    }
  )

  function handle(e)
  {
  
  }


  return (
    <div className="App">
     
      <form  >
          
            <input onChange={(e) => handle(e)}   value = {data.name} placeholder="name" id="name"  type="text" ></input>
            <input onChange={(e) => handle(e)}   value = {data.lname}  placeholder="lname" id="lname" type="text" ></input>
            <input onChange={(e) => handle(e)}  value = {data.city}    placeholder="city" id="city" type="text" ></input>

      </form>

    </div>
  );
}

export default App;
