import React from 'react';

import './footer.map.css';

import fbLogo from '../../assets/imgs/fb.png';
import igLogo from '../../assets/imgs/ig.png';
import twLogo from '../../assets/imgs/tw.png';

const FooterMap = () => {
  return (
    <>
      <footer id="sticky-footer-map" className="bg-dark container-fluid">
        <div className="row">
          <div className="col text-center">
            <div className="copyright-txt">
              &#169; {(new Date().getFullYear())} - ¿Qué tenés para dar?
            </div>
          </div>
          <div className="col text-center">
            <a href="https://www.facebook.com/quetenesparadar" target="_blank" rel="noopener noreferrer">
              <img className="social-link-logo" alt="FB Logo" src={fbLogo} />
            </a>
            <a href="https://twitter.com/quetenesparadar" target="_blank" rel="noopener noreferrer">
              <img className="social-link-logo" alt="TW Logo" src={twLogo} />
            </a>
            <a href="https://www.instagram.com/quetenesparadar/" target="_blank" rel="noopener noreferrer">
              <img className="social-link-logo" alt="IG Logo" src={igLogo} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterMap;