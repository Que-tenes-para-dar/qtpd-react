import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { fetchFiltersStart } from '../../redux/filter/filter.actions';
import { selectAllFilters } from '../../redux/filter/filter.selectors';

const Filters = ({ fetchFiltersStart, allFilters }) => {

  useEffect(() => {
    fetchFiltersStart()
  }, [fetchFiltersStart]);

  return (
    <div>
      <h5>Lista de filtros:</h5>
      {
        allFilters.map(f => <p key={f._id}>{f.description}</p>)
      }
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  fetchFiltersStart: () => dispatch(fetchFiltersStart())
});

const mapStateToProps = createStructuredSelector({
  allFilters: selectAllFilters
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filters);
