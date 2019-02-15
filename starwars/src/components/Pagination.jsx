import React from 'react'

export default (props) => {
  return (
    <div>
      {props.pageNumbers.map((currentNumber) => (
        <button onClick={props.pageClickHandler} key={currentNumber} id={currentNumber}>{ currentNumber }</button>
      ))}
    </div>
  );
}