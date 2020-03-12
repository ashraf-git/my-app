import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  var person ={
    name: "Mahfujur Rahman",
    job: "singer"
  }
  var person2 ={
    name: "Eva Rahman",
    job: "kokil kondi"
  }
  var style = {
    color: 'yellow',
    backgroundColor: 'black'
  }
return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit Done <code>src/App.js</code> and save to reload.
        </p>

        <h1 style={style}>my heading: {person.name + " " + person.job}</h1>
        <h1 style={{color: "green", backgroundColor: "white"}}>another singer: {person2.name + " " + person2.job}</h1>
        <p>My first react app</p>
      </header>
    </div>
  );
}

export default App;
