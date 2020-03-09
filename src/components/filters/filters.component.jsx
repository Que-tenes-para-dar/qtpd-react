import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  fetchDonationTypesStart
} from '../../redux/filter/filter.actions';

import { fetchCentersFilteredStart } from '../../redux/center/center.actions'
import { selectAllDonationTypes } from '../../redux/filter/filter.selectors';

import { defaultFilters } from '../../utils/constants.utils';

const Filters = ({ allDonationTypes, fetchCentersFilteredStart, fetchDonationTypesStart }) => {
  useEffect(() => {
    fetchDonationTypesStart()
  }, [fetchDonationTypesStart]);

  const [selectedDonationTypes, setSelectedDonationTypes] = useState(defaultFilters.donationTypes);
  const [maxDistance, setMaxDistance] = useState(defaultFilters.maxDistance);
  const [location, setLocation] = useState(defaultFilters.location);

  const donationTypeShouldBeChecked = donationType => {
    return selectedDonationTypes.find(d => d._id === donationType._id) !== undefined;
  }

  // const [selectedFilters, setSelectedFilters] = useState({
  //   maxDistance: defaultFilters.maxDistance,
  //   donationTypes: defaultFilters.selectedDonationTypes,
  //   location: defaultFilters.location
  // });

  const handleClickDonationType = (event, donationTypeClicked) => {
    if (event.target.checked) {
      const existingDonationType = selectedDonationTypes.find(donationType => donationType._id === donationTypeClicked._id);
      // if it's not already in the list, we add it
      if (!existingDonationType) {
        // add it
        return setSelectedDonationTypes([...selectedDonationTypes, { ...donationTypeClicked }]);
      }
      // otherwise just return, nothing to do - this scenario shouldn't happen but we want to be covered
      return;
    }
    const newDonationTypesList = selectedDonationTypes.filter(
      donationType => donationType._id !== donationTypeClicked._id
    );
    return setSelectedDonationTypes(newDonationTypesList);
  }

  const handleSearch = () => {
    return fetchCentersFilteredStart({
      donationTypes: selectedDonationTypes,
      maxDistance,
      location
    });
  };

  const handleClearFilters = () => {
    setSelectedDonationTypes([]);
  }

  return (
    <div className='container'>
      <div className="row">
        <div className="col-12 text-center">
          <h4>Tipos de donaciones</h4>
        </div>
        {
          allDonationTypes.map(donationType => {
            return (
              <div className='col-md-6' key={'div-' + donationType._id}>
                <label key={'label-' + donationType._id} htmlFor={'fcb-' + donationType._id}>{donationType.description}</label>
                <input id={'fcb-' + donationType._id} type="checkbox" key={donationType._id}
                  checked={donationTypeShouldBeChecked(donationType)}
                  onChange={(event) => handleClickDonationType(event, donationType)} />
              </div>
            );
          })
        }
      </div>
      <div className="row">
        <div className="col-12 text-center">
          Distancia: (TODO)
          {/* .ito - add scroller */}
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <input className='btn btn-primary btn-block' type="button"
            value="BUSCAR"
            onClick={handleSearch} />
        </div>
        <div className="col-6">
          <input className='btn btn-outline-primary btn-block' type="button"
            value="Borrar filtros"
            onClick={() => handleClearFilters()} />
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  fetchCentersFilteredStart: appliedFilters => dispatch(fetchCentersFilteredStart(appliedFilters)),
  fetchDonationTypesStart: () => dispatch(fetchDonationTypesStart())
});

const mapStateToProps = createStructuredSelector({
  allDonationTypes: selectAllDonationTypes,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filters);
