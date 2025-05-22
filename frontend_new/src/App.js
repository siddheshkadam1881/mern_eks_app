import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {

  const [msg, setMsg] = useState('');

  useEffect(() => {
    fetch("/api/message")
      .then(res => res.json())
      .then(data => setMsg(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        </p>
      <h1>EKS fargate demo app</h1>;

      </header>

      <h1>{msg}</h1>;



    </div>
  );
}

export default App;
