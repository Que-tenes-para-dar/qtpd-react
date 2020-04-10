import React from 'react';
import { Helmet } from "react-helmet";

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>¿Qué tenés para dar? - Contacto</title>
      </Helmet>
      <div className="page-content container-md">
        <div className="row pt-10">
          <div className="col">
            <h1>¡Contáctenos!</h1>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-5 text-justify">
            <p className="lead">
              Completando y enviando el formulario hará que nos llegue un mensaje.
            </p>
            <p>
              Si es responsable por una organización y desea aparecer en el mapa está en el lugar correcto.
            </p>
            <p>
              De todas maneras con mucho gusto recibimos comentarios, críticas y sugerencias que nos ayuden a mejorar <strong>¿Qué tenés para dar?</strong>
            </p>
          </div>
          <div className="col-sm-7">
            <div class="card">
              <div class="card-header">
                Formulario de contacto
              </div>
              <div class="card-body">
                <div class="form-group">
                  <label for="inptName">Su nombre</label>
                  <input type="text" class="form-control" id="inptName" />
                </div>
                <div class="form-group">
                  <label for="inptEmail">Su correo electrónico</label>
                  <input type="email" class="form-control" id="inptEmail" />
                  <small id="emailHelp" class="form-text text-muted">No compartiremos su dirección con nadie.</small>
                </div>
                <div class="form-group">
                  <label for="txtMsg">Su mensaje</label>
                  <textarea class="form-control" id="txtMsg" rows="9"/>
                </div>
              </div>
              <div class="card-footer text-right">
                <button className="btn btn-info">
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ContactPage;