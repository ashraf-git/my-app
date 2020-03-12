import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const noyoks = ["aliashraf","hena begum", "ali", "ashraf"]
return (
    <div className="App">
      <header className="App-header">
        <h1>I am React Lover.</h1>
        <Person name = "Munna" job= "football"></Person>
        <Person name = "Masum" job= "dorsok"></Person>
      </header>
    </div>
  );
}
function Person(props){
  return (
    <div style={{border:"2px solid green", padding: "10px", margin: "5px"}}>
      <h1>My Name: {props.name}</h1>
      <h3>My Profession: {props.job}</h3>
    </div>
  )
}

export default App;
