import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import bubbles from '../../assets/images/bubbles.png';
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
            <label className="alright">&copy; Todos os direitos reservados NoPV</label>
          </div>
        </div>

      </div>
      
  );
}