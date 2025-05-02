import React from 'react';
import icon from "../assets/icon.svg";
import apicon from "../assets/api.svg";


const Footer = () => {
  return (
    <div className="footerContent">
      
      <div className="footerLogoContainer">
      <img src={icon} alt="footerIcon" className="footerLogo" />
      <span className="footerTitle"> Movie Channel </span>
      </div>

      <div className="footerContentCard">
        <ul>
            <li> Movie Channel </li>
            <li> Trending Movies </li>
            <li> Marvel Movies </li>
            <li> Bollywood Movies </li>
            <li> Holloywood Movies </li>
        </ul>
      </div>


      <div className="footerContentCard">
       
        <ul> 
            <li> Movie Channel </li>
            <li> Trending Movies </li>
            <li> Marvel Movies </li>
            <li> Bollywood Movies </li>
            <li> Holloywood Movies </li>
        </ul>
      </div>

     


  </div>
  )
}

export default Footer