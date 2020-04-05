import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/NavBar';

import elevation from '../../assets/images/elevation.png'
import price01 from '../../assets/images/price01.png';
import price02 from '../../assets/images/price02.png';
import price03 from '../../assets/images/price03.png';

export default function Price(props) {

  return (
    <div className="main-content">
  
      <Header />
      <div className="container">
     
        <div className="container-text">
          <label className="title">Planos</label>
          <p className="description">
          Seja para encontrar profissionais de confiança que atendam remotamente ou para agendar aquele atendimento, é só conversar com o nosso chatbot via Whatsapp que ele resolve para você.
          </p>
          
          </div>
        
        </div>
  
        <div className="aboutNoPv">
          <img src={price01} className="image-price01" alt="" />
          <img src={price02} className="image-price02" alt="" />
          <img src={price03} className="image-price03" alt="" />
        </div>
  
        <div className="container-elevation">
          <img src={elevation} className="image-elevation" alt="image elevation" />
        </div>
        
      </div>
  );
}