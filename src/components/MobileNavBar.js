import React from 'react'
import { useState } from 'react';
// import menuIcon from '../images/icon-hamburger.svg'
import chevronIcon from '../images/icon-chevron.svg'
import { NavLink } from 'react-router-dom'
import  '../css/MobileNavBar.css'


let styleMercury = {
    background: '#419ebb',
};
let styleVenus = {
    background: '#eda249',
};
let styleEarth = {
    background: '#6d2ed5',
};
let styleMars = {
    background: '#d14c32',
};
let styleJupiter = {
    background: '#d83a34',
};
let styleSaturn = {
    background: '#cd5120',
};
let styleUranus = {
    background: '#1ec1a2',
};
let styleNeptune = {
    background: '#2d68f0',
};


export const MobileNavBar = () => {

    const [showMenu, setShowMenu] = useState(false);


    function handleShowMenu(){
        setShowMenu(!showMenu);
        
    }
  
    return (
        <div className = "mobile-navbar">
            <div className = "mobile-wrapper">
                <h1>The Planets</h1>
                {/* <img src = {menuIcon} onClick={handleShowMenu}className="menu-icon "alt="menu-icon"/> */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="17" onClick={handleShowMenu}
                className="menu-icon"><g fill="#FFF" fillRule="evenodd" fillOpacity={showMenu ? '0.2' : '1'}><path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z"/></g></svg>
            </div>
            
            <div className={`${ showMenu ? `visible` : `hidden`} links-wrapper`} onClick={handleShowMenu}>
                    <span className="transparent"></span>
                    {/* <Link to="/" className="navbar-logo">The Planets</Link> */}
                    <div className="link">
                        <span className="circle" style={styleMercury}></span>
                        <NavLink to="/mercury" className="isActive" >Mercury</NavLink>
                        <img src={chevronIcon} className="chevron-icon" alt="chevron icon"></img>
                    </div>
                    <div className="link">
                        <span className="circle" style={styleVenus}></span>
                        <NavLink to="/venus" className="isActive" >Venus</NavLink>
                        <img src={chevronIcon} className="chevron-icon" alt="chevron icon"></img>
                    </div>
                    <div className="link">
                        <span className="circle" style={styleEarth}></span>
                        <NavLink to="/earth" className="isActive" >Earth</NavLink>
                        <img src={chevronIcon} className="chevron-icon" alt="chevron icon"></img>
                    </div>
                    <div className="link">
                        <span className="circle" style={styleMars}></span>
                        <NavLink to="/mars" className="isActive">Mars</NavLink>
                        <img src={chevronIcon} className="chevron-icon" alt="chevron icon"></img>
                    </div>
                    <div className="link">
                        <span className="circle" style={styleJupiter}></span>
                        <NavLink to="/jupiter" className="isActive" >Jupiter</NavLink>
                        <img src={chevronIcon} className="chevron-icon" alt="chevron icon"></img>
                    </div>
                    <div className="link">
                        <span className="circle" style={styleSaturn}></span>
                        <NavLink to="/saturn" className="isActive" >Saturn</NavLink>
                        <img src={chevronIcon} className="chevron-icon" alt="chevron icon"></img>
                    </div>
                    <div className="link">
                        <span className="circle" style={styleUranus}></span>
                        <NavLink to="/uranus" className="isActive" >Uranus</NavLink>
                        <img src={chevronIcon} className="chevron-icon" alt="chevron icon"></img>
                    </div>
                    <div className="link">
                        <span className="circle" style={styleNeptune}></span>
                        <NavLink to="/neptune" className="isActive" >Neptune</NavLink>
                        <img src={chevronIcon} className="chevron-icon" alt="chevron icon"></img>
                    </div>    
            </div>
            
        </div>
    )
}

