import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../../assets/images/real-valor-logo-top.png';

const NavBar = (props) => (
  <nav>
    <h2 className="logo"><a className="logo-link" href="/"><img src={logo} alt="logo real valor" title="Real Valor" /></a></h2>
    <ul className="nav-menu">
      <li><NavLink className="link-active" activeClassName="activate" exact to="/">Home</NavLink></li>
      <li><NavLink className="link-active" activeClassName="activate" to="/bitcoins">Bitcoins</NavLink></li>
      <li><NavLink className="link-active" activeClassName="activate" to="/direct-treasure">Tesouro Direto</NavLink></li>
      <li><NavLink className="link-active" activeClassName="activate" to="/about">Sobre</NavLink></li>
    </ul>
  </nav>
);

export default NavBar;