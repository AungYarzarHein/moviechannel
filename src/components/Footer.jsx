import React from 'react';
import icon from "../assets/icon.svg";



const Footer = () => {
  return (
    <div className="footerContent">
      
      <div className="footerLogoContainer">
      {/* <img src={icon} alt="footerIcon" className="footerLogo" /> */}
      <div className="footerTitle"> Movie Channel </div>
      </div>

      <div className="footerContentCard">
        <ul className='textCenter' >
            <li> Fun & Friendly </li>
            <li> Trending Movies </li>
            <li> Marvel Movies </li>
            <li> Bollywood Movies </li>
            <li> Holloywood Movies </li>
        </ul>
      </div>


      <div className="footerContentCard">
       
        <ul className='textCenter' > 
            <li> Movie Channel </li>
            <li> Action Movies </li>
            <li> Comedy Movies </li>
            <li> Romance Movies </li>
            <li> Thriller Movies </li>
        </ul>
      </div>


      <div className="footerContentCard">
       
       <ul className='textCenter' > 
           <li> Modern & Stylish </li>
           <li> Your movies , your way </li>
           <li> Watch , Enjoy , Repeat </li>
           <li> Follow us for daily drops </li>
           <li> Powered by passion for great cinema  </li>
       </ul>
     </div>

     

   <div className="copyright">
   &#x00A9; 2025 Movie Channel . All Rights Reserved.
   </div>
  </div>
  )
}

export default Footer