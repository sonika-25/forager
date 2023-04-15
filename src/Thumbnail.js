import './styles/App.css';
import './styles/Thumbnail.css';
import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

function Thumbnail(props) {
  return (
      <div className = 'boxThumbnail'>
        <div className="image">
          <img id ='img' src ={props.props.image}  alt= 'of food'/>
        </div>
        <div className="content">            
            {props.props.name} <br/>
            {props.props.price}<br/>
            {props.props.distance}<br/>
            {props.props.expiry}<br/>
            Pick up by {props.props.time}
        </div>
        <Link to ={`/${props.props.id}`} className ="buyLink" id ={props.props.status}>
            <button className='buyLink' id = {props.props.status}>{props.props.status}</button>
        </Link>
      </div>
  );
}

export default Thumbnail;
