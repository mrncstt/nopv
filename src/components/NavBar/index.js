import React from 'react';
import { NavLink } from 'react-router-dom';

import './styles.css';
import logo from '../../assets/images/logo.png';

const NavBar = (props) => (
  <nav>
        <h2 className="container-logo">
          <a href="/"><img src={logo} className="image-logo" alt="Logo No PV" title="Logo No PV" /></a>
        </h2>
        <ul className="nav-menu">
          <li><NavLink className="link-active" activeClassName="activate" exact to="/">Início</NavLink></li>
          <li><NavLink className="link-active" activeClassName="activate" to="/about">Sobre</NavLink></li>
          <li><NavLink className="link-active" activeClassName="activate" to="/price">Planos</NavLink></li>
          <li><NavLink className="link-active" activeClassName="activate" to="/faq">Faq</NavLink></li>
          <li><NavLink className="link-active" activeClassName="activate" to="/history">História</NavLink></li>
          <li><NavLink className="link-active" activeClassName="activate" to="/contact">Contato</NavLink></li>
        </ul>
      </nav>
);

export default NavBar;