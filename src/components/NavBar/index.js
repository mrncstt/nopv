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
      <li><NavLink className="link-active" activeClassName="activate" exact to="/">Home</NavLink></li>
      <li><NavLink className="link-active" activeClassName="activate" to="/about">Sobre</NavLink></li>
      <li><NavLink className="link-active" activeClassName="activate" to="/team">Time</NavLink></li>
      <li><NavLink className="link-active" activeClassName="activate" to="/contact">Contato</NavLink></li>
    </ul>
  </nav>
);

export default NavBar;