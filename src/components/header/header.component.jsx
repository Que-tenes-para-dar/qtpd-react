import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import './header.css';

const Header = () => {
  const location = useLocation();

  const getNavLinkClass = (path) => {
    return location.pathname === path ? ' active' : '';
  };

  return (
    <div>
      <nav class="navbar navbar-expand-md navbar-dark fixed-top header-container">
        <div className="logo-container">
          <Link className="navbar-brand" to=''>
            <img alt="QTPD Logo" class="navbar-brand-full" src="https://www.quetenesparadar.com/assets/img/brand/logo-85x85.png" width="55" height="55"></img>¿Qué tenés para dar?
          </Link>
        </div>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav mr-auto">
            <li class={"nav-item" + getNavLinkClass('/')}>
              <Link className="nav-link" to=''>Mapa</Link>
            </li>
            <li class={"nav-item" + getNavLinkClass('/como-funciona')}>
              <Link className="nav-link" to='como-funciona'>¿Cómo funciona?</Link>
            </li>
            <li class={"nav-item" + getNavLinkClass('/quienes-somos')}>
              <Link className="nav-link" to='quienes-somos'>¿Quiénes somos?</Link>
            </li>
            <li class={"nav-item" + getNavLinkClass('/contacto')}>
              <Link className="nav-link" to='contacto'>Contacto</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;