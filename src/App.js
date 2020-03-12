import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
return (
    <div className="App">
      <header className="App-header">
        <h1>I am React Lover.</h1>
        <Person></Person>
        <Person></Person>
      </header>
    </div>
  );
}

function Person(){
  const personStyle = {
    color: 'yellow',
    border: '2px solid green',
    margin: '10px',
    padding: '10px'
  }
  return <div style = {personStyle}>
  <h1> Name: Shakib Al Hasan</h1>
  <h3>hero of the year</h3>
  </div>
}

export default App;
