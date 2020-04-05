import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/NavBar';

import elevation from '../../assets/images/elevation.png'

import '../../styles/styles.css'

export default function Faq(props) {

  return (
    <div className="main-content">
      
      <Header />
      <div className="container">
     
        <div className="container-text">
          <h2 className="title">Sobre</h2>
          <p className="description">
          Seja para encontrar profissionais de confiança que atendam remotamente ou para agendar aquele atendimento, é só conversar com o nosso chatbot via Whatsapp que ele resolve para você.
          </p>
          
        </div>
        
      </div>

      <div className="container-elevation">
        <img src={elevation} className="image-elevation" alt="image elevation" />
      </div>
            
    </div>
  );
}