import PropTypes from 'prop-types'; 
import React from 'react'


export const CounterApp = ({value}) => {

  const handleAdd = () => {
    // console.log(event);
    console.log(value);
    value = 1000;
  };

  return (
    <>
        <h1>CounterApp</h1>
        <h2> { value } </h2>

        <button onClick={ handleAdd }>
          +1
        </button>
    </>
  );

};

CounterApp.prototype = {
    value: PropTypes.number.isRequired,
};
