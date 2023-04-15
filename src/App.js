import './styles/App.css';
import React, { useState, useEffect } from 'react';
import  returnDummyData from './dummydata.js'
import Thumbnail from './Thumbnail.js'
import {Link} from 'react-router-dom';
import Navbar from './NavBar';

function App() {
  const [foodItems, setItems] = useState([]);
  const [sellers, setSellers] = useState([]);

  useEffect(() => {
    var data = returnDummyData()
    setItems (data[0])
    setSellers(data[1])
  });
  function displayThumbnails () {
    var displayArray =[]
    for (var i = 0 ; i<foodItems.length; i++){
      displayArray.push(
        <Thumbnail props = {foodItems[i]} ></Thumbnail>
        )
    }
    return displayArray
  }
  return (
    <div className="App">
      <header id="header">
        <Navbar />
      </header>
      <h1 className = "heading">Pickups Near Parkville, Victoria</h1>
      <div display= "grid" className='grid four large'>
        {displayThumbnails()}
      </div>
    </div>
  );
}

export default App;
