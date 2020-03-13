import React, { useState, useEffect } from 'react';
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
        <Counter></Counter>
        <Users></Users>
        {
          noyoks.map(nayok => <li>{nayok}</li>)
        }
        {
          products.map(product => <li>{product.name}</li>)
        }
        {
          products.map(product =><Product product={product}></Product>)
        }
      </header>
    </div>
  );
}
function Users(){
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data=> setUsers(data))
  })
  return(
    <div>
      <h3>Dynamic Users:{users.length}</h3>
      <ul>
      {
        users.map(user => <li>{user.email}</li>)
      }
      </ul>
    </div>
  )
}
function Counter(){
  const [count, setCount] = useState(10);
  const handleIncrease = () => setCount(count + 1);
  return(
    <div>
      <h1>Count:{count}</h1>
      <button onMouseMove = { () => setCount(count - 1) }>Decrease</button>
      <button onClick= {handleIncrease}>Increase</button>
    </div>
  )
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
