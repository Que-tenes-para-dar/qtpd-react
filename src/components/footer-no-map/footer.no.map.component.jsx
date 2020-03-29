import React from 'react';

import './footer.no.map.css';

import fbLogo from '../../assets/imgs/fb.png';
import igLogo from '../../assets/imgs/ig.png';
import twLogo from '../../assets/imgs/tw.png';

const FooterNoMap = (props) => {
  if (props.show) {
    return (
      <>
        <footer id="sticky-footer-no-map" className="bg-dark container-fluid">
          <div className="row">
            <div className="col">
              <div className="copyright-txt">
                &#169; Copyright {(new Date().getFullYear())} - Todos los derechos reservados
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
  } else {
    return (<></>);
  }
};

export default FooterNoMap;