import React from 'react';

import ListItem from './ListItem'

import './StarWars.css';


export default (props) => {
  return (
    <div className="cards">
      {props.chars.map((current, index) => (
        <ListItem  char={current} key={index} />
      ))}
    </div>
  );
}