import React from 'react'
import { Link } from 'react-router-dom'


function NavBar() {
    return (
        <>
            <nav className="navbar">
               <div className="navbar-container">
                   <h1>The Planets</h1>
                    {/* <Link to="/" className="navbar-logo">The Planets</Link> */}
                    <Link to="/mercury" className="planets">Mercury</Link>
                    <Link to="/venus" className="planets">Venus</Link>
                    <Link to="/earth" className="planets">Earth</Link>
                    <Link to="/mars" className="planets">Mars</Link>
                    <Link to="/jupiter" className="planets">Jupiter</Link>
                    <Link to="/saturn" className="planets">Saturn</Link>
                    <Link to="/uranus" className="planets">Uranus</Link>
                    <Link to="/neptune" className="planets">Neptune</Link>
               </div>
            </nav>
        </>
    )
}

export default NavBar
