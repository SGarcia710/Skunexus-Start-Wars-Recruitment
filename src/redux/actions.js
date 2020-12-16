import { SET_SELECTED_PLANET, CLOSE_MODAL, OPEN_MODAL } from './actionTypes';

export const setSelectedPlanet = (planet) => {
  return {
    type: SET_SELECTED_PLANET,
    payload: {
      planet,
    },
  };
};
export const closeModal = () => {
  return {
    type: CLOSE_MODAL,
  };
};
export const openModal = () => {
  return {
    type: OPEN_MODAL,
  };
};
