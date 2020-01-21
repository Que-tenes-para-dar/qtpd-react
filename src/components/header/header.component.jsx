import React from 'react';
import { Link } from 'react-router-dom';

import { HeaderContainer, LogoContainer } from './header.styles';

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer to='/' className='px-3'>
        <span className='d-md-none d-lg-flex text-decoration-none'>
          ¿Qué tenés para dar?
        </span>
      </LogoContainer>
      <div>
        <Link to=''>Mapa</Link>
        <Link to='como-funciona'>¿Cómo funciona?</Link>
        <Link to='quienes-somos'>¿Quiénes somos?</Link>
        <Link to='contacto'>Contacto</Link>
      </div>
    </HeaderContainer>
  );
};

export default Header;