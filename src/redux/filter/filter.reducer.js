import FilterActionTypes from './filter.types';

import {
  defaultFilters
} from '../../utils/constants.utils';

const INITIAL_STATE = {
  allDonationTypes: [],
  error: null,
  selectedDonationTypes: defaultFilters.donationTypes,
  selectedLocation: defaultFilters.location,
  selectedMaxDistance: defaultFilters.maxDistance
};

const filterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FilterActionTypes.FETCH_DONATION_TYPES_START:
      return {
        ...state
      };
    case FilterActionTypes.FETCH_DONATION_TYPES_SUCCESS:
      return {
        ...state,
          allDonationTypes: action.payload,
          selectedDonationTypes: action.payload
      };
    case FilterActionTypes.FETCH_DONATION_TYPES_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}

export default filterReducer;