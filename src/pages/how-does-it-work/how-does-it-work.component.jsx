import React from 'react';
import { Helmet } from "react-helmet";

import step1 from '../../assets/imgs/steps/step-1.png';
import step2 from '../../assets/imgs/steps/step-2.png';
import step3 from '../../assets/imgs/steps/step-3.png';
import step4 from '../../assets/imgs/steps/step-4.png';


const HowDoesItWork = () => {
  return (
    <>
      <Helmet>
        <title>¿Qué tenés para dar? - ¿Cómo funciona QTPD?</title>
      </Helmet>
      <div className="page-content container-md">
        <div className="row">
          <div className="col">
            <h1>¿Cómo funciona QTPD?</h1>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col text-justify">
            <p>
              El rol de ¿Qué tenés para dar? es ser un nexo entre personas que desean hacer
              donaciones de distintos tipos de objetos materiales y organizaciones o centros
              que las necesitan. No nos encargamos de transportarlas ni del estado de las mismas.
              Apelamos al sentido común y buena voluntad de cada persona en que va a donar
              materiales útiles y que las organizaciones las usaran para buen fin.
            </p>
            <p>
              Todas las organizaciones que aparecen listadas fueron contactadas por <strong>¿Qué
                 tenés para dar?</strong> previo a su publicación.
            </p>
            <hr />
          </div>
        </div>


        <div className="row">
          <div className="col-md-3 col-12 text-center">
            <img alt="Paso 1" className="img-responsive" src={step1} />
          </div>
          <div className="col-md-9 col-12">
            <h3>Encontrá cosas que no necesitás más</h3>
            <p className="text-justify">
              ¿Te mudás? ¿Ordenaste tu cuarto? ¿O simplemente querés que otras personas le sigan
              dando uso a cosas que vas a dejar de usar?
            </p>
            <p className="text-justify">
              Juntá todas esas cosas que tienen
              una segunda vida y encontrá quién las puede necesitar.
            </p>
          </div>
        </div>


      </div>
    </>
  );
};

export default HowDoesItWork;