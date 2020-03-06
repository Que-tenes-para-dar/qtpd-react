import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
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

  return (
    <>
      <h4>Lista de centros: </h4>
      {
        centers.map(c => <p key={c._id}>{c.name}</p>)
      }
      <FooterMap />
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
