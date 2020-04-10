import React from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';

import whoWeAreIto from '../../assets/imgs/whoweare_ito.png';
import whoWeAreMartin from '../../assets/imgs/whoweare_martin.png';
import lnLogo from '../../assets/imgs/ln.png';
import twLogo from '../../assets/imgs/tw.png';

const WhoWeAre = () => {
  return (
    <>
      <Helmet>
        <title>¿Qué tenés para dar? - ¿Quiénes somos?</title>
      </Helmet>
      <div className="page-content container-md">
        <div className="row pt-10">
          <div className="col">
            <h1>¿Quiénes somos?</h1>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col text-justify">
            <p>
              Somos dos jóvenes informáticos que creen en que la suma de pequeñas buenas acciones tienen el
              poder de mejorar la sociedad y el país en donde vivimos. En ¿Qué tenés para dar? buscamos ser
              el nexo que falta entre la población y las ONG que día a día trabajan para ayudar a miles de
              personas en todo el país.
            </p>
            <p>
              Siempre estamos necesitando una mano en algo, si tenés ganas de participar no dudes en <Link to='contacto'>contacto</Link>.
            </p>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-4 text-center">
                <img alt="Ito" className="img-responsive who-we-are-img " src={whoWeAreIto} />
              </div>
              <div className="col-md-8">
                <h3>Alvaro Fariña</h3>
                <p className="text-justify mb-0">
                  Ing. de sistemas, de Montevideo. El bicho de QTPD le picó con la culpa de una campera guardada que ya no le servía.
                </p>
                <div>
                  <a href="https://twitter.com/ItoFarina" target="_blank" rel="noopener noreferrer">
                    <img className="social-link-logo" alt="TW Logo" src={twLogo} />
                  </a>
                  <a href="https://www.linkedin.com/in/alvaro-fari%C3%B1a-94265a44" target="_blank" rel="noopener noreferrer">
                    <img className="social-link-logo" alt="LN Logo" src={lnLogo} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-4 col-12 text-center">
                <img alt="Martin" className="img-responsive who-we-are-img " src={whoWeAreMartin} />
              </div>
              <div className="col-md-8 col-12">
                <h3>Martín Manzo</h3>
                <p className="text-justify mb-0">
                  Lic. en sistemas, de Montevideo. Enfermo por el deporte. El bicho de QTPD le pico cuando terminó de ordenar su dormitorio.
                </p>
                <div>
                  <a href="https://twitter.com/tincho89" target="_blank" rel="noopener noreferrer">
                    <img className="social-link-logo" alt="TW Logo" src={twLogo} />
                  </a>
                  <a href="https://www.linkedin.com/in/martinmanzo/" target="_blank" rel="noopener noreferrer">
                    <img className="social-link-logo" alt="LN Logo" src={lnLogo} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h2>Agradecimientos</h2>
            <p>
              <strong>¿Qué tenés para dar?</strong> no hubiera sido posible de no ser por la ayuda de amigos, familiares y personas que se nos acercan
              desinteresadamente a ayudar. 
            </p>
            <p>
              A todos ellos <strong>¡muchas gracias!</strong> 
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhoWeAre;