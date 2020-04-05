import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import balloom from '../../assets/images/balloom.png';
import helpme from '../../assets/images/help.png';

export default function Footer(props) {

  return (
  
      <div className="container-footer">
        
        <div className="container-images">
          <div className="container-balloom">
            <img src={balloom} className="image-balloom" alt="image bubbles" />
          </div>
          <div className="container-help">
            <img src={helpme} className="image-help" alt="image bubbles" />
          </div>
        </div>
        <div>
          <p className="alright">&copy; 2020 direitos reservados NoPV</p>
        </div>

      
    </div>
      
  );
}