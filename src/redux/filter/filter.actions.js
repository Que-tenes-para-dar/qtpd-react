import FilterActionTypes from './filter.types';
import { defaultFilters } from '../../utils/constants.utils';


export const fetchDonationTypesStart = () => ({
  type: FilterActionTypes.FETCH_DONATION_TYPES_START
});

export const fetchDonationTypesSuccess = (filters) => {
  filters.forEach((filter) => {
    defaultFilters.donationTypes.push(filter);
  });
  return {
    type: FilterActionTypes.FETCH_DONATION_TYPES_SUCCESS,
    payload: filters
  };
};

export const fetchDonationTypesFailure = errorMessage => ({
  type: FilterActionTypes.FETCH_DONATION_TYPES_FAILURE,
  payload: errorMessage
});