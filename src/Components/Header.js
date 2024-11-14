import './Nav.css';
import '../Components/Our-Team';
// import { Link } from 'react-router-dom'
import React from 'react';
import { useNavigate } from 'react-router-dom';


const Header = () => {

  const Navigate = useNavigate();
  
  const handleClick = (className, route) => {
    const element = document.getElementsByClassName(className)[0];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      Navigate(route); 
      setTimeout(() => {
        const updatedElement = document.getElementsByClassName(className)[0];
        if (updatedElement) {
          updatedElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500); 
    }
  };
 


    return (

    <nav className="navbar">
        <div className="logo">
          <img className="enactus-logo" src={require('../Images/Enactus_Logo.png')} alt="Enactus logo" />
        </div>

        <div className="nav-list">
          <ul>
            <li><button onClick={() => handleClick('App', '/')}>Home</button></li>
            <li><button onClick={() => handleClick('about-us', '/')}>About Us</button></li>
            <li><button onClick={() => handleClick('team', 'our-team')}>Projects</button></li>
            <li><button onClick={() => handleClick('team', 'our-team')}>Team</button></li>
            <li><button onClick={() => handleClick('contact-us', '/')}>Contact Us</button></li>
          </ul>
        </div>
      </nav>
    );
};

export default Header;  