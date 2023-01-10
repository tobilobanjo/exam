import React, { useReducer } from 'react';
import { initialState, reducer } from '../store/reducer';
import { NavLink } from "react-router-dom";
import './styles.css';

const Counter = props => {

  const [data, dispatch] = useReducer(reducer, initialState);

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT", payload: data.count + 1 });
  }

  const handleDecrement = () => {
    dispatch({ type: "DECREMENT", payload: data.count - 1 });
  }

  const resetCount = () => {
    dispatch({ type: "RESET" });
  }

  const setValue = e => {
    const { value } = e.target;

    dispatch({ type: "SET_VALUE", payload: parseInt(value) });
  }

  return (
    <div className="wrapper">
      <div className="nav">
      <NavLink to="/useReducer"><p>UseReducer</p></NavLink>
        <NavLink to="/useCounter"><p>UseCounter</p></NavLink>
      </div>
      <div className="header">
        <p>setup a custom counter hook with increment, decrement, reset, set value functions with a valid UI and implement a combination of states with a useReducer that implements a counter with four evident features in the custom hook - increment, decrement, reset, set value</p>
        <h6>{Number.isInteger(data.count) ? data.count : 0}</h6>
      </div>
      <div className="buttonContainer">
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={resetCount}>Reset</button>
      </div>
      <div className="counterInput">
        <input name="setCount" type="number" onChange={setValue} placeholder="Set value for count"/>
      </div>
    </div>
  )
}

export default Counter;
