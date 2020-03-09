import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { fetchCentersStart } from '../../redux/center/center.actions'
import { selectCenters } from '../../redux/center/center.selectors';

const CentersMap = ({ fetchCentersStart, centers }) => {
  // here useEffect is replacing the componentDidMount behaviour
  // as we know that fetchCentersStart is not going to change because it comes from the dispatch properties,
  // it has the same behaviour as sending an empty array
  useEffect(() => {
    fetchCentersStart()
  }, [fetchCentersStart]);

  return (
    <div>
      <h4>Lista de centros: </h4>
      {
        centers.map(c => <p key={c._id}>{c.name}</p>)
      }
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  fetchCentersStart: () => dispatch(fetchCentersStart())
});

const mapStateToProps = createStructuredSelector({
  centers: selectCenters
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CentersMap);
