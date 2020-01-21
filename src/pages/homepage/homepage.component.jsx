import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchCentersStart } from '../../redux/organization/organization.actions';

import Filters from '../../components/filters/filters.component';

const HomePage = ({ fetchCentersStart }) => {

  useEffect(() => {
    fetchCentersStart()
  }, [fetchCentersStart]);

  return (
    <div>
      <Filters />
      <h1>Hi from homepage!</h1>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  fetchCentersStart: () => dispatch(fetchCentersStart())
});

export default connect(
  null,
  mapDispatchToProps
)(HomePage);
