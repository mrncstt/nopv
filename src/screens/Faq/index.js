import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/NavBar';

import elevation from '../../assets/images/elevation.png'
import button from '../../assets/images/button.png';

export default function Faq(props) {

  return (
    <div className="main-content">
      
      <Header />
      <div className="container">
     
        <div className="container-text">
          <h2 className="title">Faq</h2>
          <p className="center">
          Bem vindo ao nosso FAQ ele ainda está sendo construído, por tanto nos ajude deixando a sua dúvida, utilizaremos estatísticas para deixar sempre assuntos relevantes e de utilidade aqui. 
          <br />
          Obrigado.
          <br />
          <br />
          Clique no botão abaixo para ler nosso faq.
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