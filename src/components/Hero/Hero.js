import React from 'react';
import './Hero.css';
import {AiOutlineSearch} from "react-icons/ai";
import Video from '../../assets/maldivesVideo.mp4';

function Hero() {
  return (
    <div className='hero' >
      <video autoplay muted loop  id='video'>
        <source src={Video} type='video/mp4' />
      </video>
      <div className='overlay' ></div>
      <div className='content' >
        <h1>First Class Travel</h1>
        <h2>Top 1% Locations WorldWide</h2>
        <form className='form'>
          <div>
            <input type="text" placeholder='Search Destinations' />
          </div>
          <div>
            <button><AiOutlineSearch className="icon" /></button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Hero;
