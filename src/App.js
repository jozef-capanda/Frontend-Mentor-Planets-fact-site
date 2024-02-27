import React, {useState} from 'react';
import './App.css';
import Nav from './components/Nav';
import Planets from './components/Planets';
import data from './data.json';

function App() {
  const [activePlanet, setActivePlanet] = useState('Earth');
  const [info, setInfo] = useState('overview');
  const [activeHamburger, setActiveHamburger] = useState(false);

  return (
    <div className="App">
      <Nav active={activePlanet} setActive={setActivePlanet} data={data} setInfo={setInfo} activeHamburger={activeHamburger} setActiveHamburger={setActiveHamburger}/>
      <Planets active={activePlanet} data={data} info={info} setInfo={setInfo} activeHamburger={activeHamburger}/>
    </div>
  )
}

export default App;
