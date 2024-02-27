import React from 'react';
import '../styles/nav.css';
import Button from './Button';

function Nav({active, setActive, data, setInfo, activeHamburger, setActiveHamburger}) {
  const activeData = data.filter(planet => {
    if(planet.name === active){
      return planet
    }
    return false
  });
  return (
    <div className="nav">
      <div className="logo">The planets</div>
      <button className={`hamburger ${activeHamburger ? 'activeHamburger' : '' }`} onClick={()=> {setActiveHamburger(!activeHamburger)}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="17"><g fill="#FFF" fill-rule="evenodd"><path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z"/></g></svg>
      </button>
      <ul className={`planets ${activeHamburger ? 'activeHamburger' : '' }`}>
        {data.map(planet => {
          const isActive = (activeData[0].name === planet.name ? true : false);
          return <Button key={planet.name} name={planet.name} isActive={isActive} setActive={setActive} setInfo={setInfo} setActiveHamburger={setActiveHamburger}/>
        })}
      </ul>
    </div>
  )
}

export default Nav