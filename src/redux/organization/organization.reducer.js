import OrganizationActionTypes from './organization.types';

const INITIAL_STATE = {
  centers: null,
  isFetching: false,
  errorMessage: undefined
};

const organizationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OrganizationActionTypes.FETCH_CENTERS_START:
      return {
        ...state,
        isFetching: true
      };
    case OrganizationActionTypes.FETCH_CENTERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
          centers: action.payload
      };
    case OrganizationActionTypes.FETCH_CENTERS_FAILURE:
      return {
        ...state,
        isFetching: false,
          errorMessage: action.payload
      };
    default:
      return state;
  }
}

export default organizationReducer;