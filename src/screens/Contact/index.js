import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/NavBar';

import elevation from '../../assets/images/elevation.png'
import button from '../../assets/images/button.png';

export default function Contact(props) {

  return (
    <div className="main-content">
      
      <Header />
      <div className="container">
     
        <div className="container-text">
          <label className="title">Contato</label>
          <p className="center">
          Agradecemos qualquer feedbck ou idéia, também estamos buscando apoio para que essa solução ajude o máximo de pessoas possíl. Então não exite em entrar em contato com a gente.
          <br />
          <br />
          Clique no botão abaixo para entrar em contato.
          </p>

          <img src={button} className="buttonRead" /> 
          
        </div>
        
      </div>

      <div className="container-elevation">
        <img src={elevation} className="image-elevation" alt="image elevation" />
      </div>
      
    </div>
  );
}