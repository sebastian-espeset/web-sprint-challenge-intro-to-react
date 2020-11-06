import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import './App.css';
import Character from './components/Character'
import axios from "axios";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [starWarsData,setStarWarsData] = useState({});
  const [characterData,setCharacterData] = useState([]); 
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  function fetchStarWarsData(){
    
    axios
      .get("https://swapi.dev/api/people")
      .then((res)=>{
        setStarWarsData(res.data)
        setCharacterData(res.data.results.map(function(element){
          return element.name;
        }))
        console.log(res.data)
      })
      .catch((err)=>{
        console.log(err)
      });
   }
   useEffect(()=>{
     fetchStarWarsData();
   },[])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Character characterData = {characterData}/>
    </div>
  );

  }
export default App;
