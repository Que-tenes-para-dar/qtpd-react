import CenterActionTypes from './center.types'

const INITIAL_STATE = {
  centers: [],
  error: null
}

const centerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CenterActionTypes.FETCH_CENTERS_SUCCESS:
      return {
        ...state,
        centers: action.payload
      };
    case CenterActionTypes.FETCH_CENTERS_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}

export default centerReducer;