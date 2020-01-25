import CenterActionTypes from './center.types'

const INITIAL_STATE = {
  currentCenters: [],
  error: null
}

const centerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CenterActionTypes.SET_CURRENT_CENTERS:
      return {
        ...state,
        currentCenters: action.payload,
        error: null
      };
    default:
      return state;
  }
}

export default centerReducer;