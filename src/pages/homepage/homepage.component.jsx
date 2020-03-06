import React from 'react';
import { Helmet } from "react-helmet";
import CentersMap from '../../components/centers-map/centers-map.component';
import Filters from '../../components/filters/filters.component';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>¿Qué tenés para dar? - Mapa de instituciones solidarias</title>
      </Helmet>
      <div className="page-content">
        <div className="row">
          <div className="col">
            <Filters />
          </div>
          <div className="col-md-9">
            <CentersMap />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
