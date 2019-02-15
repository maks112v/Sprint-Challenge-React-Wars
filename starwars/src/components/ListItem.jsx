import React from 'react'

import './StarWars.css';

export default (props) => {
  return (
    <div className="card">
      <h3>{ props.char.name }</h3>
      <p>Birth Year: { props.char.birth_year }</p> 
      <p>Eye Color: { props.char.eye_color }</p> 
      <p>Eye Color: { props.char.gender }</p> 
    </div>
  );
}