import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const noyoks = ["aliashraf","hena begum", "ali", "ashraf"]
  const products = [
    {name: 'Photoshop', price: '$99.00'},
    {name: 'Illustrator', price: '$99.00'},
    {name: 'Pdf Reader', price: '$06.00'},
    {name: 'XD', price: '$59.00'}
  ]
return (
    <div className="App">
      <header className="App-header">
        <h1>I am React Lover.</h1>
        <Product product = {products[0]}></Product>
        <Product product = {products[1]}></Product>
        <Person name = "Munna" job= "football"></Person>
        <Person name = "Masum" job= "dorsok"></Person>
      </header>
    </div>
  );
}
function Product(props){
  const productStyle = {
      border: '1px solid gray',
      height: '200px',
      width: '200px',
      borderRadius: '5px',
      backgroundColor: 'lightgray',
      float: 'left'
  }
  const {name, price} = props.product;
  console.log(name, price)
  return (
    <div style = {productStyle}>
      <h3>{props.product.name}</h3>
      <h5>{props.product.price}</h5>
      <button>Buy Now</button>
    </div>
  )
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
