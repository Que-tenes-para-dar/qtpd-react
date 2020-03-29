import React from 'react';
import { Marker } from 'google-maps-react';

import { centerTypes } from '../../utils/constants.utils';
import animalCenterPin from '../../assets/imgs/map/animal-center.png';
import homeCenterPin from '../../assets/imgs/map/home-center.png';
import organizationCenterPin from '../../assets/imgs/map/organization-center.png';
import religiousCenterPin from '../../assets/imgs/map/religious-center.png';
import schoolCenterPin from '../../assets/imgs/map/school-center.png';

const MapMarker = ({ center }) => {

  const getCenterPinFromCenterType = centerType => {
    switch (centerType) {
      case centerTypes.AnimalRefuge:
        return animalCenterPin;
      case centerTypes.Home:
        return homeCenterPin;
      case centerTypes.Organization:
        return organizationCenterPin;
      case centerTypes.ReligiousCenter:
        return religiousCenterPin;
      case centerTypes.School:
        return schoolCenterPin;
      default:
        return organizationCenterPin;
    }
  }

  const markerClicked = (center) => {
    // .ito - TODO: show react-bootstrap modal: https://react-bootstrap.github.io/components/modal/
    console.log(`Center clicked ${center.name}`);
  }

  return (
    <Marker
      onClick={() => markerClicked(center)}
      icon={getCenterPinFromCenterType(center.centerType)}
      title={center.name}
      name={center.title}
      position={{ lng: center.loc.coordinates[0], lat: center.loc.coordinates[1] }}>
    </Marker>
  )
}

export default MapMarker;
