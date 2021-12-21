
import React from 'react'
import { NavLink } from 'react-router-dom'

let activeStyleMercury = {
    borderTop: 'solid 4px #419ebb',
    color: '#ffffff'
};
let activeStyleVenus = {
    borderTop: 'solid 4px #eda249',
    color: '#ffffff'
};
let activeStyleEarth = {
    borderTop: 'solid 4px #6d2ed5',
    color: '#ffffff'
};
let activeStyleMars = {
    borderTop: 'solid 4px #d14c32',
    color: '#ffffff'
};
let activeStyleJupiter = {
    borderTop: 'solid 4px #d83a34',
    color: '#ffffff'
};
let activeStyleSaturn = {
    borderTop: 'solid 4px #cd5120',
    color: '#ffffff'
};
let activeStyleUranus = {
    borderTop: 'solid 4px #1ec1a2',
    color: '#ffffff'
};
let activeStyleNeptune = {
    borderTop: 'solid 4px #2d68f0',
    color: '#ffffff'
};


function NavBar() {
    return (
        <>
            <nav className="navbar">
               <h1>The Planets</h1>
               <div className="navbar-container">
                    {/* <Link to="/" className="navbar-logo">The Planets</Link> */}
                    <NavLink to="/mercury" style={({ isActive }) => isActive ? activeStyleMercury : undefined} >Mercury</NavLink>
                    <NavLink to="/venus" className="isActive" style={({ isActive }) => isActive ? activeStyleVenus : undefined}>Venus</NavLink>
                    <NavLink to="/earth" className="isActive" style={({ isActive }) => isActive ? activeStyleEarth : undefined}>Earth</NavLink>
                    <NavLink to="/mars" className="isActive" style={({ isActive }) => isActive ? activeStyleMars : undefined}>Mars</NavLink>
                    <NavLink to="/jupiter" className="isActive" style={({ isActive }) => isActive ? activeStyleJupiter : undefined}>Jupiter</NavLink>
                    <NavLink to="/saturn" className="isActive" style={({ isActive }) => isActive ? activeStyleSaturn : undefined}>Saturn</NavLink>
                    <NavLink to="/uranus" className="isActive" style={({ isActive }) => isActive ? activeStyleUranus : undefined}>Uranus</NavLink>
                    <NavLink to="/neptune" className="isActive" style={({ isActive }) => isActive ? activeStyleNeptune : undefined}>Neptune</NavLink>
               </div>
            </nav>
        </>
    )
}

export default NavBar
