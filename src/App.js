//import './App.css';
import Axios from 'axios';
import React,{useState} from 'react';

function App() {

  const url = "https://webhook.site/1f900d3c-4229-4c58-a301-c115806e4f80";

  const [data, setdata] = useState(
    {
      name : "",
      lname : "",
      city:""
    }
  )

  function submit(e)
  {
    e.preventDefault();

    Axios.post(url,
      {
        name:data.name,
        lname:data.lname,
        cirty:data.city
      })
      .then(res => {
        console.log(res.data);
      })

  }

  function handle(e)
  {
      const newdata = {...data}
      newdata[e.target.id] = e.target.value;
      setdata(newdata);
      console.log(newdata);
  }


  return (
    <div className="App">
     
      <form onSubmit={(e) => submit(e)}  >
          
            <input onChange={(e) => handle(e)}   value = {data.name} placeholder="name" id="name"  type="text" ></input>
            <input onChange={(e) => handle(e)}   value = {data.lname}  placeholder="lname" id="lname" type="text" ></input>
            <input onChange={(e) => handle(e)}  value = {data.city}    placeholder="city" id="city" type="text" ></input>

            <button type="submit">Sumbit</button>
      </form>

    </div>
  );
}

export default App;
