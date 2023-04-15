import './styles/App.css';
import './styles/FoodItem.css'
import React, { useState, useEffect } from 'react';
import  returnDummyData from './dummydata.js'
import Navbar from './NavBar';
function FoodItem() {
  const [msgOnClaim, setMsg] = useState("")
  const [foodItems, setItems] = useState([]);
  const [sellers, setSellers] = useState([]);
  useEffect(() => {
    var data = returnDummyData()
    var id = window.location.pathname[1]
    id = Number(id)
    var sellerId = Number (data[0][id-1].sellerId)
    setItems (data[0][id-1])
    setSellers(data[1][0])
    console.log(sellers[sellerId-1])
  });
  function claimButton (){
    console.log('the fuck')
    var available = foodItems.quantity
    var sold = foodItems.sold
    var waitList = Number(sold)-Number(available)
    var message = ''
    var claimedMsg=''
    if (waitList>0){
        message = `Join waitList. You are ${waitList} in Line`
        claimedMsg = `You are no. ${waitList} on our Waitlist. Kindly check back by ${foodItems.time} for more information`
    }
    else if (foodItems.price == 'Free'){
        message = `Claim Item`
        claimedMsg = `Kindly collect your meal by ${foodItems.time} from ${sellers.location}`
    }
    else {
        message = `Purchase Item`
        claimedMsg = `Kindly pay and collect your meal by ${foodItems.time} from ${sellers.location}`
    }
    return ([<button onClick={()=>alert(claimedMsg)} className='claimButton'>{message}</button>])
  }
  function changeClaimMsg(){
    var para = document.getElementsByClassName("claimMsg")
    console.log(para)
  }
  return (
    <div className="foodItem">
      <header id="header">
        <Navbar />
      </header>
      <div display= "grid" className=' grid two large'>
        <div className='imageIsolated' >
            <img src = {foodItems.image} className ='imgIsolated'height = "500px"></img>
        </div>
        <div className="content">            
            <span id = "name">{foodItems.name}</span><br/>
            <span id = "dist">{foodItems.distance}</span><br/>
            <span id = "exp">{foodItems.expiry}</span><br/>
            <span id = "price">{foodItems.price}</span><br/>
            <span id = "time">Pick up by {foodItems.time}</span><br/>
            <p id = "desc">{foodItems.desc}</p><br/>
            <div >
                {claimButton()}
            </div>
            <div>
                <p id ="claimMsg" className='claimMsg'></p>
            </div>
        </div> 
      </div>
      <div className='try grid' text-align = 'left'>
        <img className = "sellerImage"src = {sellers.image} height="100px"></img>
        <div className='sellerContent'>
            <p>{sellers.name}</p>
            <p>{sellers.meals} saved meals</p>
            <p>Donor since {sellers.joined}</p>
            <p>Located in {sellers.location}</p>
        </div>  
      
      </div>
    </div>
  );
}

export default FoodItem;
