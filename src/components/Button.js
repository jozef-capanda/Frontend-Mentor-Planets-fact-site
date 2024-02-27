import React from 'react';

function Button({name, isActive, setActive, setInfo, setActiveHamburger}) {
  if(isActive){
    return (
      <li onClick={()=>{setActive(name); setInfo('overview'); setActiveHamburger(false)}} className={`${name.toLowerCase()} active`}><a href='#'>{name}</a></li>
    )
  } else {
  return (
    <li onClick={()=>{setActive(name);setInfo('overview'); setActiveHamburger(false)}} className={name.toLowerCase()}><a href='#'>{name}</a></li>
  )}
}

export default Button