import FilterActionTypes from './filter.types';


export const fetchDonationTypesStart = () => ({
  type: FilterActionTypes.FETCH_DONATION_TYPES_START
});

export const fetchDonationTypesSuccess = (filters) => {
  return {
    type: FilterActionTypes.FETCH_DONATION_TYPES_SUCCESS,
    payload: filters
  };
};

export const fetchDonationTypesFailure = errorMessage => ({
  type: FilterActionTypes.FETCH_DONATION_TYPES_FAILURE,
  payload: errorMessage
});