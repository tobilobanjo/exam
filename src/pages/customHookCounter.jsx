import React from 'react';
import { NavLink } from "react-router-dom";
import './styles.css';
import useCounter from "../hooks/customHookCounter";

const CustomCounterHook = props => {

  const { count, increment, decrement, reset, setValue } = useCounter();

  return (
    <div className="wrapper">
      <div className="nav">
      <NavLink to="/useReducer"><p>UseReducer</p></NavLink>
        <NavLink to="/useCounter"><p>UseCounter</p></NavLink>
      </div>
      <div className="header">
        <p>setup a custom counter hook with increment, decrement, reset, set value functions with a valid UI and implement a combination of states with a use that implements a counter with four evident features in the custom hook - increment, decrement, reset, set value</p>
        <h6>{Number.isInteger(count) ? count : 0}</h6>
      </div>
      <div className="buttonContainer">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
      <div className="counterInput">
        <input name="setCount" type="number" onChange={setValue} placeholder="Set value for count"/>
      </div>
    </div>
  )
}

export default CustomCounterHook;
