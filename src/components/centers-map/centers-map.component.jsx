// External references
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// Local references
import { fetchCentersFilteredStart } from '../../redux/center/center.actions';
import { selectCenters } from '../../redux/center/center.selectors';
import { defaultLocation } from '../../utils/constants.utils';

import FooterMap from '../footer-map/footer.map.component';
import MapWithMarkers from '../map-with-markers/map-with-markers.component';
import MapContainer from '../map-with-markers/map-with-markers.component';

const CentersMap = ({ centers, fetchCentersFilteredStart }) => {
  // here useEffect is replacing the componentDidMount behaviour
  // as we know that fetchCentersFilteredStart is not going to change because it comes from the dispatch properties,
  // it has the same behaviour as sending an empty array
  useEffect(() => {
    fetchCentersFilteredStart()
  }, [fetchCentersFilteredStart]);

  // TODO: set user location by reading the value from the browser on component did mount
  const [userLocation, setUserLocation] = useState(defaultLocation);


  return (
    <>
      <div className="h-100 w-100">
        <MapContainer markers={centers} />
        <MapWithMarkers markers={centers} userLocation={userLocation} />
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
