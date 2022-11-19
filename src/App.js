import logo from './logo.svg';
import './App.css';
import {useState} from 'react';


function App(props) {
  const [number,setNumber] = useState(0);
  const [message,setMessage] = useState('')
  const increment = () => {
    if(number>10){
           setMessage("Sorry Counter closed for the day")
    }else{
       setNumber(number+1);
        console.log(number + "   After Clicked Plus ");
    }
  }
  const decrement = ()=> {
  // number = number - 1;{/*This is not correct*/} 
  //we cannot update the value directly in functional components, 
  //we need state to update the value, whenevr the state changes the component gets 
  //rererendered that is render function is called whenever the state changes
  if(number>0){
   setNumber(number-1);
    console.log(number + "   After Clicked minus ");
    setMessage('');
  }
  }  
  return (
    <div className="App">
     <h1 className= "counter-value">Counter {props.title}</h1>
     <button onClick={increment}>+</button>
     <p style={{color:'red',backgroundColor:'green'}}>{number}</p>
     <button onClick={decrement}>-</button> {/* Here we cannot call like this decremen() because it is called by javascript later when we click on plus*/}
     <p>{message}</p>
    </div>
  );
}

export default App;
