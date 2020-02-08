import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  fetchFiltersStart,
  toggleFilterIsApplied,
  clearAllSelectedFilters
} from '../../redux/filter/filter.actions';

import { selectAllFilters, selectSelectedFilters } from '../../redux/filter/filter.selectors';

const Filters = ({ allFilters, selectedFilters, fetchFiltersStart, toggleFilterIsApplied, clearAllSelectedFilters }) => {

  useEffect(() => {
    fetchFiltersStart()
  }, [fetchFiltersStart]);

  return (
    <div className='container'>
      <div className="row">
        <div className="col-12 text-center">
          <h4>Tipos de donaciones</h4>
        </div>
        {
          allFilters.map(filter => {
            return (
              <div className='col-md-6' key={'div-' + filter._id}>
                <label key={'label-' + filter._id} htmlFor={'fcb-' + filter._id}>{filter.description}</label>
                <input id={'fcb-' + filter._id} type="checkbox" key={filter._id} onChange={() => toggleFilterIsApplied(filter)} />
              </div>
            );
          })
        }
      </div>
      <div className="row">
        <div className="col-12 text-center">
          Distancia: (TODO)
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <input className='btn btn-primary btn-block' type="button"
            value="BUSCAR"
            onClick={() => clearAllSelectedFilters()} />
        </div>
        <div className="col-6">
          <input className='btn btn-outline-primary btn-block' type="button"
            value="Borrar filtros"
            onClick={() => clearAllSelectedFilters()} />
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  clearAllSelectedFilters: () => dispatch(clearAllSelectedFilters()),
  fetchFiltersStart: () => dispatch(fetchFiltersStart()),
  toggleFilterIsApplied: filter => dispatch(toggleFilterIsApplied(filter))
});

const mapStateToProps = createStructuredSelector({
  allFilters: selectAllFilters,
  selectedFilters: selectSelectedFilters
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filters);
