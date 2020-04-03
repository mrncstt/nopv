import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/styles.css'

export default function Home(props) {

  return (
    <div className="main-content">
      
      <div className="container">
      <Link className="back" to="/bitcoins">
        <img src="https://i.ytimg.com/vi/OBE5ZHk3Yj0/maxresdefault.jpg" /></Link>
        <br />
        <Link className="back" to="/direct-treasure">
        <img src="https://blog.rico.com.vc/hs-fs/hubfs/tesouro-nacional-guia-brasil.jpg?width=1000&name=tesouro-nacional-guia-brasil.jpg" /></Link>
      </div>
      
    </div>
  );
}