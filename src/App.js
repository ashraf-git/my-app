import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const noyoks = ["aliashraf","hena begum", "ali", "ashraf"]
return (
    <div className="App">
      <header className="App-header">
        <h1>I am React Lover.</h1>
        <Person name={noyoks[0]} lover = 'Mossammad Hena Begum'></Person>
        <Person name="Mossammad Hena Begum" lover='Mohammad Ali Ashraf Khan'></Person>
        <Person></Person>
      </header>
    </div>
  );
}

function Person(props){
  const personStyle = {
    color: 'yellow',
    border: '2px solid green',
    margin: '10px',
    padding: '10px'
  }
  console.log(props)
  return <div style = {personStyle}>
  <h1> Name: {props.name}</h1>
  <h3>hero of {props.lover}</h3>
  </div>
}

export default App;
