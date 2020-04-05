import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/NavBar';

import mobile from '../../assets/images/mobile.png';
import elevation from '../../assets/images/elevation.png'

import './styles.css'

export default function Home(props) {

  return (
    <div className="main-content">
      <Header />
      <div className="container">
     
        <div className="container-text">
          <h2 className="title">Agende um serviço</h2>
          <p className="description">
            Seja para encontrar profissionais de confiança que atendam remotamente ou para agendar aquele atendimento, é só conversar com o nosso chatbot via Whatsapp que ele resolve para você.
          </p>

          <div className="container-buttons">
            <Link className="button" to="/regiter">Cadastrar</Link>
            <Link className="button" to="/login">Entrar</Link>
          </div>

        </div>
        <div className="container-mobile">
          <img src={mobile} className="image-mobile" alt="image mobile" />
        </div>
        
      </div>

      <div className="container-elevation">
        <img src={elevation} className="image-elevation" alt="image elevation" />
      </div>
      
    </div>
  );
}