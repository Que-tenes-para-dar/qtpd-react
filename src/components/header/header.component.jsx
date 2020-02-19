import React from 'react';
import { Link } from 'react-router-dom';

import './header.css'; 

const Header = () => {
  return (
    <div className="header-container">
      <a to='/' className='logo-container px-3'>
        <span className='d-md-none d-lg-flex text-decoration-none'>
          ¿Qué tenés para dar?
        </span>
      </a>
      <div>
        <Link to=''>Mapa</Link>
        <Link to='como-funciona'>¿Cómo funciona?</Link>
        <Link to='quienes-somos'>¿Quiénes somos?</Link>
        <Link to='contacto'>Contacto</Link>
      </div>
    </div>
  );
};

export default Header;