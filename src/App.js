
import { useState, useEffect } from 'react';
import './css/App.css'
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { data } from './data.js';


import Mercury from './components/Mercury'
import Venus from './components/Venus'
import Earth from './components/Earth'
import Mars from './components/Mars'
import Jupiter from './components/Jupiter'
import Saturn from './components/Saturn'
import Uranus from './components/Uranus'
import Neptune from './components/Neptune'
import { MobileNavBar } from './components/MobileNavBar';


function App() {
  const mercury = data.filter(item => item.name === "Mercury");
  const venus = data.filter(item => item.name === "Venus");
  const earth = data.filter(item => item.name === "Earth");
  const mars = data.filter(item => item.name === "Mars");
  const jupiter = data.filter(item => item.name === "Jupiter");
  const saturn = data.filter(item => item.name === "Saturn");
  const uranus = data.filter(item => item.name === "Uranus");
  const neptune = data.filter(item => item.name === "Neptune");

  const[width,setwidth] = useState(window.innerWidth);
  const breakpoint = 376;

  useEffect(() => {
    const handleWindowResize = () => setwidth(window.innerWidth)
    window.addEventListener("resize", handleWindowResize);

    //Retun a function from the effect that removes the event listener

    return () => window.removeEventListener("resize", handleWindowResize);
  }, [])

  
  return (
    <div className="container">
    <Router>
      { width < breakpoint ? <MobileNavBar/>: <NavBar />}
      <Routes>
        <Route path="/mercury" element={<Mercury data = {mercury} screen={width}/>}></Route>
        <Route path="/venus" element={<Venus data = {venus} screen={width}/>}></Route>
        <Route path="/earth" element={<Earth data={earth} screen={width}/>}></Route>
        <Route path="/mars" element={<Mars data={mars} screen={width}/>}></Route>
        <Route path="/jupiter" element={<Jupiter data={jupiter} screen={width}/>}></Route>
        <Route path="/saturn" element={<Saturn data={saturn} screen={width}/>}></Route>
        <Route path="/uranus" element={<Uranus data={uranus} screen={width}/>}></Route>
        <Route path="/neptune" element={<Neptune data={neptune} screen={width}/>}></Route>
      </Routes>
    </Router> 
    </div>
  );
}


export default App;
