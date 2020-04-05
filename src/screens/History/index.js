import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/NavBar';

import elevation from '../../assets/images/elevation.png'
import button from '../../assets/images/button.png';

import '../../styles/styles.css'

export default function History(props) {

  return (
    <div className="main-content">
      
      <Header />
      <div className="container">
     
        <div className="container-text">
          <h2 className="title">História</h2>
          <p className="center">
          Seja para encontrar profissionais de confiança que atendam remotamente ou para agendar aquele atendimento, é só conversar com o nosso chatbot via Whatsapp que ele resolve para você.
          <br />
          <br />
          Clique no botão abaixo para ler nossa história.
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