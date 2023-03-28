import {useState} from 'react' // use significa q es un hook, funcion q es hook por anteponer un use
import PropTypes from 'prop-types'; 
import React from 'react'


export const CounterApp = ({value}) => {

  const [ counter, setCounter ] = useState( value );

  const handleAdd = () => {
    // console.log(event);
    setCounter(counter + 1);
  };

  const handleSubstract = () => {
    setCounter(counter - 1);
  };

  const handleReset = () => {
    setCounter(value)
  }

  return (
    <>
        <h1>CounterApp</h1>
        <h2> { counter } </h2>

        <button onClick={ handleAdd }>
          +1
        </button>

        <button onClick={ handleSubstract }>
          -1
        </button>
        
        <button onClick={ handleReset}>
          Reset
        </button>
    </>
  );

};

CounterApp.prototype = {
    value: PropTypes.number.isRequired,
};
