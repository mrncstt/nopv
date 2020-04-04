import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/styles.css'

export default function Login(props) {

  return (
    <div className="main-content">
      
      <div className="container">
        Login screen
      </div>

      <div><Link className="back" to="/">Back</Link></div>
      
    </div>
  );
}