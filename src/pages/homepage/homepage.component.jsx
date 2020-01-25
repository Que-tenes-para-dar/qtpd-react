import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { setCurrentCenters } from '../../redux/center/center.actions'
import { selectCurrentCenters } from '../../redux/center/center.selectors';

import Filters from '../../components/filters/filters.component';

const HomePage = ({ setCurrentCenters, currentCenters }) => {

  useEffect(() => {
    fetch('https://qtpd-api.herokuapp.com/centers')
      .then(response => {
        return response.json()
      })
      .then(jsonResponse => {
        return setCurrentCenters(jsonResponse.data);
      }).catch(error => console.log('Error while fetching centers: ', error));
  }, [setCurrentCenters]);

  return (
    <div>
      <Filters />
      <h1>Hi from homepage!</h1>
      {
        currentCenters.map(c => {
          return <p key={c.id}>{c.name}</p>
        })
      }

    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  setCurrentCenters: (centers) => dispatch(setCurrentCenters(centers))
});

const mapStateToProps = createStructuredSelector({
  currentCenters: selectCurrentCenters
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
