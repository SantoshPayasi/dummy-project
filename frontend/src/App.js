import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from "axios"
function App() {
  const [message, setMessage] = React.useState("message")
  React.useEffect(() => {
    (()=>{
    axios.post("https://dummy-project-three.vercel.app/getData", {
        method:"GET",
        headers:{
            "Access-Control-Allow-Origin":"https://dummy-project-frontend.vercel.app"
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
