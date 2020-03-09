import React from 'react';

import Filters from '../../components/filters/filters.component';
import CentersMap from '../../components/centers-map/centers-map.component';

const HomePage = () => {
  return (
    <div>
      <Filters />
      <CentersMap />
    </div>
  );
}

export default HomePage;
