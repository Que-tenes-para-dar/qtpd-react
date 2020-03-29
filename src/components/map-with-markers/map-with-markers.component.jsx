import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import { Modal } from 'react-bootstrap'

import secretSettings from '../../secrets';
import { defaultLocation } from '../../utils/constants.utils';
import { centerTypes } from '../../utils/constants.utils';
import animalCenterPin from '../../assets/imgs/map/animal-center.png';
import homeCenterPin from '../../assets/imgs/map/home-center.png';
import organizationCenterPin from '../../assets/imgs/map/organization-center.png';
import religiousCenterPin from '../../assets/imgs/map/religious-center.png';
import schoolCenterPin from '../../assets/imgs/map/school-center.png';
import youAreHerePin from '../../assets/imgs/map/you-are-here.png';

const MapContainer = ({ google, markers, userlocation }) => {
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
    console.log(`Center clicked ${center.name}`);
  }

  return (
    <Map google={google} zoom={14} center={{ lng: defaultLocation.longitude, lat: defaultLocation.latitude }}
      style={{ width: '100%', height: '100%', position: 'relative' }}>

      <Marker draggable={true} title={'Estás aquí'} name={'Current location'}
        position={{ lng: defaultLocation.longitude, lat: defaultLocation.latitude }}
        icon={{ url: youAreHerePin }} />
      {
        markers.map(center => {
          return (
            <Marker
              key={center._id}
              onClick={() => markerClicked(center)}
              icon={getCenterPinFromCenterType(center.centerType)}
              title={center.name}
              name={center.title}
              position={{ lng: center.loc.coordinates[0], lat: center.loc.coordinates[1] }}>
            </Marker>
          );
        })
      }
    </Map>
  );
}

export default GoogleApiWrapper({
  apiKey: (secretSettings.googleMapsApiKey)
})(MapContainer);
