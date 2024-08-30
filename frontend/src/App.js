import logo from './logo.svg';
import './App.css';
import React from 'react';
function App() {
  const [message, setMessage] = React.useState("message")
  React.useEffect(() => {
    (()=>{
    fetch("http://localhost:3001/getData", {
        method:"GET"
      }).then(async data=>{
        const fetchedData = await data.json()
        setMessage(fetchedData.data.name)
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
