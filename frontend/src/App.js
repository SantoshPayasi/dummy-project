import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from "axios"
function App() {
  const [message, setMessage] = React.useState("message")
  React.useEffect(() => {
    (()=>{
    axios.get("https://dummy-project-three.vercel.app/getData", {
        headers:{
            "Access-Control-Allow-Origin":"*"
          }
      }).then(async data=>{
         console.log(data)
        // setMessage(fetchedData.data.name)
      })
   
    })()
    
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           {message}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
