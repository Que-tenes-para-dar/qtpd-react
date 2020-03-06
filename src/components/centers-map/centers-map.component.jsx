import GoogleMapReact from 'google-map-react';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import secretSettings from '../../secrets';
import { fetchCentersFilteredStart } from '../../redux/center/center.actions';
import { selectCenters } from '../../redux/center/center.selectors';
import FooterMap from '../footer-map/footer.map.component';

const CentersMap = ({ centers, fetchCentersFilteredStart }) => {
  // here useEffect is replacing the componentDidMount behaviour
  // as we know that fetchCentersFilteredStart is not going to change because it comes from the dispatch properties,
  // it has the same behaviour as sending an empty array
  useEffect(() => {
    fetchCentersFilteredStart()
  }, [fetchCentersFilteredStart]);

  const defaultMapProps = {
    center: {
      lat: -34.9032784,
      lng: -56.1881599
    },
    zoom: 11
  };

  return (
    <>
      <h4>Lista de centros: </h4>
      {
        centers.map(c => <p key={c._id}>{c.name}</p>)
      }
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: secretSettings.googleMapsApiKey }}
          defaultCenter={defaultMapProps.center}
          defaultZoom={defaultMapProps.zoom}
        >
        </GoogleMapReact>
        <FooterMap />
      </div>
    </>
  );
}

const mapDispatchToProps = dispatch => ({
  fetchCentersFilteredStart: () => dispatch(fetchCentersFilteredStart())
});

const mapStateToProps = createStructuredSelector({
  centers: selectCenters
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CentersMap);
