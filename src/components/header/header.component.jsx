import React from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';

import './header.css';

const Header = () => {
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);

  const getNavLinkClass = (path) => {
    return location.pathname === path ? ' active' : '';
  };

  return (
    <>
      <Navbar expand="md" fixed="top" className="header-container" expanded={expanded}>
        <div className="logo-container">
          <Link className="navbar-brand" to=''>
            <img alt="QTPD Logo" className="navbar-brand-full" src="https://www.quetenesparadar.com/assets/img/brand/logo-85x85.png" width="55" height="55"></img>¿Qué tenés para dar?
          </Link>
        </div>
        <Navbar.Toggle aria-controls="navbarCollapse" onClick={() => setExpanded(expanded ? false : "expanded")} />
        <Navbar.Collapse id="navbarCollapse">
          <ul className="navbar-nav mr-auto">
            <li className={"nav-item" + getNavLinkClass('/')}>
              <Link className="nav-link" to='' onClick={() => setTimeout(() => { setExpanded(false) }, 150)}>Mapa</Link>
            </li>
            <li className={"nav-item" + getNavLinkClass('/como-funciona')}>
              <Link className="nav-link" to='como-funciona' onClick={() => setTimeout(() => { setExpanded(false) }, 150)}>¿Cómo funciona?</Link>
            </li>
            <li className={"nav-item" + getNavLinkClass('/quienes-somos')}>
              <Link className="nav-link" to='quienes-somos' onClick={() => setTimeout(() => { setExpanded(false) }, 150)}>¿Quiénes somos?</Link>
            </li>
            <li className={"nav-item" + getNavLinkClass('/contacto')}>
              <Link className="nav-link" to='contacto' onClick={() => setTimeout(() => { setExpanded(false) }, 150)}>Contacto</Link>
            </li>
          </ul>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;