import FilterActionTypes from './filter.types'

const INITIAL_STATE = {
  allFilters: [],
  error: null
}

const filterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
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