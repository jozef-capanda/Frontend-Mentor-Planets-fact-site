import React from 'react';
import '../styles/planets.css';

function Planets({active, data, info, setInfo, activeHamburger}) {
  let paragraph = '';
  let link = '';

  let activeData = data.filter(planet => {
    if(planet.name === active){
      return true
    }
    return false
  })

  if(info === 'overview'){
    paragraph = activeData[0].overview.content;
    link = activeData[0].overview.source;
  } else if (info === 'structure'){
    paragraph = activeData[0].structure.content;
    link = activeData[0].structure.source;
  }else if (info === 'geology'){
    paragraph = activeData[0].geology.content;
    link = activeData[0].geology.source;
  }

  const switchImg = (information) =>{
    if(information === "overview") {
      return <img src={`..${activeData[0].images.planet.substring(1)}`} alt={activeData[0].name} className="second-img disabled"/>
    } else if(information === "structure") {
      return <img src={`..${activeData[0].images.internal.substring(1)}`} alt={activeData[0].name} className="second-img"/>
    } else if(information === "geology") {
      return <img src={`..${activeData[0].images.geology.substring(1)}`} alt={activeData[0].name} className="second-img geology"/>
    }
  }

  return (
    <main className={`${activeHamburger ? 'activeHamburger':''}`}>
      <div className="photos"> 
        <img src={`..${activeData[0].images.planet.substring(1)}`} alt={activeData[0].name}/>
        {switchImg(info)}
      </div>
      <aside>
        <h1>{activeData[0].name}</h1>
        <p>{paragraph}</p>
        <div className="link"><span>Source</span> : <a href={link} target="_blank">Wikipedia <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"><path fill="#FFF" d="M11.34.66C10.9.22 10.37 0 9.75 0h-7.5C1.63 0 1.1.22.66.66.22 1.1 0 1.63 0 2.25v7.5c0 .62.22 1.15.66 1.59.44.44.97.66 1.59.66h7.5c.62 0 1.15-.22 1.59-.66.44-.44.66-.97.66-1.59v-7.5c0-.62-.22-1.15-.66-1.59zM10 6.25a.467.467 0 01-.305.46.544.544 0 01-.195.04.465.465 0 01-.352-.149L8.023 5.476 3.852 9.648a.481.481 0 01-.352.149.48.48 0 01-.352-.149l-.796-.797a.48.48 0 01-.149-.351.48.48 0 01.149-.352l4.172-4.172-1.125-1.125c-.162-.15-.198-.333-.11-.546A.467.467 0 015.75 2H9.5c.135 0 .253.05.352.148A.48.48 0 0110 2.5v3.75z" opacity=".5"/></svg></a></div>
        <div className={`buttons ${activeHamburger ? 'activeHamburger':''}`}>
        <button className={`${activeData[0].name.toLowerCase()} ${info === 'overview' ? 'active' : ''}`} onClick={()=> {setInfo('overview')}}><span>01</span>overview</button>
        <button className={`${activeData[0].name.toLowerCase()} ${info === 'structure' ? 'active' : ''}`} onClick={()=> {setInfo('structure')}}><span>02</span>{window.innerWidth > 680 ? 'internal structure' : 'structure'}</button>
        <button className={`${activeData[0].name.toLowerCase()} ${info === 'geology' ? 'active' : ''}`} onClick={()=> {setInfo('geology')}}><span>03</span>{window.innerWidth > 680 ? 'surface geology' : 'surface'}</button>
        </div>
      </aside>
      <div className="stats">
        <div><p>Rotation time</p>{activeData[0].rotation}</div>
        <div><p>Revolution time</p>{activeData[0].revolution}</div>
        <div><p>Radius</p>{activeData[0].radius}</div>
        <div><p>Average temp.</p>{activeData[0].temperature}</div>
      </div>
    </main>
  )
}

export default Planets