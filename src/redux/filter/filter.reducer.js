import FilterActionTypes from './filter.types';
import {
  invertFilterIsApplied
} from './filter.utils';


const INITIAL_STATE = {
  allFilters: [],
  error: null,
  selectedFilters: []
};

const filterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FilterActionTypes.INVERT_FILTER_IS_APPLIED:
      return {
        ...state,
        selectedFilters: invertFilterIsApplied(state.selectedFilters, action.payload)
      };
    case FilterActionTypes.CLEAR_ALL_SELECTED_FILTERS:
      return {
        ...state,
        selectedFilters: []
      };
    case FilterActionTypes.FETCH_FILTERS_START:
      return {
        ...state
      };
    case FilterActionTypes.FETCH_FILTERS_SUCCESS:
      return {
        ...state,
        allFilters: action.payload
      };
    case FilterActionTypes.FETCH_FILTERS_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}

export default filterReducer;