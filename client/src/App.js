import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const getNumber = () => {
    // Get the passwords and store them in state
    fetch('/api/test')
      .then(res => res.json())
      .then(number => console.log(number) );
  }
  
  return (



    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hosted on Heroku?
        </a>
        <div>
          <button onClick={getNumber} ></button>
        </div>
      </header>
    </div>
  );
}

export default App;
