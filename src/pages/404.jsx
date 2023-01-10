import React from 'react';
import './styles.css';
import {Link} from "react-router-dom"

const Error = () => {

  return (
    <div className="wrapper">
      <div className="errorWrapper">
      <h6>🎭</h6>
      <h3>Page not found</h3>
      <div class="homeButton">
      <a href="/">
        Go Back
      </a>
      </div>
      </div>
    </div>
  )
}

export default Error;
