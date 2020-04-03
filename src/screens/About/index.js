import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/styles.css'

export default function About(props) {

  return (
    <div className="main-content">
      
      <h2>title</h2>
      <div className="container">
        About
      </div>

      <div><Link className="back" to="/">Back</Link></div>
      
    </div>
  );
}