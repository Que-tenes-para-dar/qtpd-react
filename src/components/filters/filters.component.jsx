import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { fetchCentersFilteredStart } from '../../redux/center/center.actions';
import { fetchDonationTypesStart } from '../../redux/filter/filter.actions';
import { selectAllDonationTypes } from '../../redux/filter/filter.selectors';
import { defaultFilters } from '../../utils/constants.utils';
import './filters.css';
import Slider from '@material-ui/core/Slider';

const Filters = ({ allDonationTypes, fetchCentersFilteredStart, fetchDonationTypesStart }) => {

  useEffect(() => {
    setLoadingFilters(true);
    fetchDonationTypesStart();
  }, [fetchDonationTypesStart]);

  useEffect(() => {
    setSelectedDonationTypes(allDonationTypes);
    if (allDonationTypes.length > 0) {
      setLoadingFilters(false);
    }
  }, [allDonationTypes]);

  const [selectedDonationTypes, setSelectedDonationTypes] = useState(allDonationTypes);
  const [maxDistance, setMaxDistance] = useState(defaultFilters.maxDistance);
  const [sliderValue, setSliderValue] = useState(12);
  const [loadingFilters, setLoadingFilters] = useState(true);
  const [location, setLocation] = useState(defaultFilters.location);

  const donationTypeShouldBeChecked = donationType => {
    return selectedDonationTypes.find(d => d._id === donationType._id) !== undefined;
  };

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
  };

  const sliderValueConverter = (value) => {
    return [1, 2, 3, 5, 8, 15, 25, 50, 100, 150, 300, 500, 1000][value];
  };

  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
    setMaxDistance(sliderValueConverter(newValue));
  };

  const sliderValueLabelFormat = (value) => {
    const sliderVal = sliderValueConverter(value);
    if (sliderVal === 1000) {
      return "∞ km.";
    }
    return `${sliderVal} km.`;
  }

  const handleSearch = () => {
    return fetchCentersFilteredStart({
      donationTypes: selectedDonationTypes,
      maxDistance,
      location
    });
  };

  const handleClearFilters = () => {
    setSelectedDonationTypes(allDonationTypes);
    setMaxDistance(1000);
    setSliderValue(12);
  };

  const getSelectedDistanceStr = () => {
    if (maxDistance === 1000) {
      return `Sin límite de distancia`;
    }
    return `Máximo ${maxDistance} km.`;
  };

  return (
    <div className='container filters-container'>
      <div className="row">
        <div className="col-12 filters-top filters-title">
          ¡Alguien necesita lo que no usas!
        </div>
        <div className="col-12 filters-top filters-subtitle">
          Seleccioná <strong>qué</strong> tenés para dar y te mostramos a <strong>dónde</strong> llevarlo.
          </div>
      </div>

      <div className="row">
        {loadingFilters ? (
          <div className="col-12">
            <div className="loader">
              <div class="sk-chase">
                <div class="sk-chase-dot white"></div>
                <div class="sk-chase-dot white"></div>
                <div class="sk-chase-dot white"></div>
                <div class="sk-chase-dot white"></div>
                <div class="sk-chase-dot white"></div>
                <div class="sk-chase-dot white"></div>
              </div>
              <>Cargando...</>
            </div>
          </div>
        ) : (
            <>
              <div className="col-12">
                <div className="filter-section-title">
                  <>TENGO:</>
                </div>
                <div className="row">
                  {
                    allDonationTypes.map(donationType => {
                      return (
                        <div className='col-6 available-filter' key={'div-' + donationType._id}>
                          <Form.Check
                            type='switch'
                            id={'fcb-' + donationType._id}
                            label={donationType.description}
                            onChange={(event) => handleClickDonationType(event, donationType)}
                            checked={donationTypeShouldBeChecked(donationType)}
                          />
                        </div>
                      );
                    })
                  }
                </div>
              </div>
              <div className="col-12">
                <div className="filter-section-title">
                  <>LO LLEVO:</> <span className="text-white">{getSelectedDistanceStr()}</span>
                </div>
                <div className="col-12">
                  <Slider
                    value={sliderValue}
                    min={0}
                    max={12}
                    step={1}
                    marks
                    valueLabelDisplay="auto"
                    onChange={handleSliderChange}
                    getAriaValueText={sliderValueLabelFormat}
                    valueLabelFormat={sliderValueLabelFormat}
                  />
                </div>
              </div>
            </>
          )}
      </div>
      {!loadingFilters &&
        <div className="row">
          <div className="col-6">
            <button className='btn btn-outline-light btn-block' type="button" onClick={() => handleClearFilters()}>Borrar filtros</button>
          </div>
          <div className="col-6">
            <button className='btn btn-primary btn-block' type="button" onClick={handleSearch}>BUSCAR</button>
          </div>
        </div>
      }
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
