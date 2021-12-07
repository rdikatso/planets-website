
import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { data } from './data.js';


import Mercury from './components/Mercury'
import Venus from './components/Mercury'
import Earth from './components/Earth'
import Mars from './components/Mars'
import Jupiter from './components/Jupiter'
import Saturn from './components/Saturn'
import Uranus from './components/Uranus'
import Neptune from './components/Neptune'


function App() {
  const mercury = data.filter(item => item.name === "Mercury");
  const venus = data.filter(item => item.name === "Venus");
  const earth = data.filter(item => item.name === "Earth");
  const mars = data.filter(item => item.name === "Mars");
  const jupiter = data.filter(item => item.name === "Jupiter");
  const saturn = data.filter(item => item.name === "Saturn");
  const uranus = data.filter(item => item.name === "Uranus");
  const neptune = data.filter(item => item.name === "Neptune");
  
  return (
    <>
    <Router>
      <NavBar />
      <Routes>
        {/* <Route path="/" exact element={<Home/>}></Route> */}
        <Route path="/mercury" element={<Mercury data = {mercury}/>}></Route>
        <Route path="/venus" element={<Venus data = {venus}/>}></Route>
        <Route path="/earth" element={<Earth data={earth}/>}></Route>
        <Route path="/mars" element={<Mars data={mars}/>}></Route>
        <Route path="/jupiter" element={<Jupiter data={jupiter}/>}></Route>
        <Route path="/saturn" element={<Saturn data={saturn}/>}></Route>
        <Route path="/uranus" element={<Uranus data={uranus}/>}></Route>
        <Route path="/neptune" element={<Neptune data={neptune}/>}></Route>
      </Routes>
    </Router>
      
    </>
  );
}

const Home = ()=> (
  <>
    <h1>Home</h1>
  </>
)
 
// const Mercury = ()=> (
//   <>
//     <h1>Im Mercury</h1>
//   </>
// )
// const Venus = ()=> (
//   <>
//     <h1>Im Venus</h1>
//   </>
// )
// const Earth = ()=> (
//   <>
//     <h1>Im Earth</h1>
//   </>
// )
// const Mars = ()=> (
//   <>
//     <h1>Im Mars</h1>
//   </>
// )
// const Jupiter = ()=> (
//   <>
//     <h1>Im Jupiter</h1>
//   </>
// )
// const Saturn = ()=> (
//   <>
//     <h1>Im Saturn</h1>
//   </>
// )
// const Uranus = ()=> (
//   <>
//     <h1>Im Uranus</h1>
//   </>
// )
// const Neptune = ()=> (
//   <>
//     <h1>Im Neptune</h1>
//   </>
// )

export default App;
