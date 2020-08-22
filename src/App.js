import React, { useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let products = [{name: 'photoshop', price: '$90.99'},
   {name:'Illustrator', price:'$599'},
  {name:'AfterEffects', price:'$699'}]
   
   
  var person = {
    name: " Dr.mahfuz",
    job: "Singer"
  }
  var person2 = {
    name: " Eva Rahman",
    job: "Singer"
  }
  var style = {
    color: "red" ,
    backgroundColor : 'yellow'
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit Done22 <code>src/App.js</code> and save to reload.
        </p>
        <Users></Users>
        <Counter></Counter>
        <ul>
          {
            products.map(product => <li>{product.name}</li>)
          }
          
        </ul>
        <Product name={products[0].name}></Product>
        <Person name="Farhan" job="Sleeping"></Person>
        <Person name="Shahriar" job="Watching porn"></Person>
        <Person name="Ratul" job="reading books"></Person>
        <p>My first React work</p>
        <h1  style={style}>My heading :{person.name +" "+person.job}</h1>
        <h3>Famous : {person2.name + " " + person2.job}</h3>
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
function Users(){
  const [users, setUsers]=useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
     .then(res=> res.json())
     .then(data=> setUsers(data));
  },[])
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}
function Product(props){
  const productStyle={
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '300px',
    float:'left'
  }
  return (
    <div style={productStyle}>
       <h2>Name:{props.name} </h2>
       <h1></h1>
       <button>Buy Now</button>
    </div>
  )
}

function Counter(){
  const [count , setCount] = useState(5);
  const handleIncrease = () => {
  setCount(count + 1);
}
  return(
    <div>
      <h1>Count:{count}</h1>
     <button onClick={handleIncrease}>Increase</button>
     <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  )
}
function Person(props){
  const personStyle={
    border:'2px solid red',
    margin: '10px'
  }
  
  return (<div style={personStyle}>
   <h1>Name: {props.name}</h1>
  <h3>Hobby : {props.job}</h3>
  </div>
  )
}

export default App;
