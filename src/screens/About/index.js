import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/NavBar';

import elevation from '../../assets/images/elevation.png'
import about01 from '../../assets/images/about01.png';
import about02 from '../../assets/images/about02.png';
import about03 from '../../assets/images/about03.png';

export default function About(props) {

  return (
    <div className="main-content">
      <Header />
      <div className="container">
     
        <div className="container-text">
          <label className="title">Sobre</label>
          <p className="center">
          Seja para encontrar profissionais de confiança que atendam remotamente ou para agendar aquele atendimento, é só conversar com o nosso chatbot via Whatsapp que ele resolve para você.
          </p>
          
        </div>
        
      </div>

      <div className="aboutNoPv">
        <img src={about01} className="image-about01" alt="" />
        <img src={about02} className="image-about02" alt="" />
        <img src={about03} className="image-about03" alt="" />
      </div>

      <div className="container-elevation">
        <img src={elevation} className="image-elevation" alt="image elevation" />
      </div>
      
    </div>
  );
}