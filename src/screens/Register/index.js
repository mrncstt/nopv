import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/styles.css'

export default function Register(props) {

  return (
    <div className="main-content">
        
      <div className="container">
        Register screen
      </div>

      <div><Link className="back" to="/">Back</Link></div>
      
    </div>
  );
}