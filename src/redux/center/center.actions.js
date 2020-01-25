import CenterActionTypes from './center.types';

export const setCurrentCenters = centers => ({
  type: CenterActionTypes.SET_CURRENT_CENTERS,
  payload: centers
});