import { SET_SELECTED_PLANET, CLOSE_MODAL, OPEN_MODAL } from '../actionTypes';

const initialState = {
  selectedPlanet: null,
  isModalOpen: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_SELECTED_PLANET: {
      const { planet } = action.payload;
      return {
        ...state,
        selectedPlanet: planet,
      };
    }
    case CLOSE_MODAL: {
      return {
        ...state,
        selectedPlanet: null,
        isModalOpen: false,
      };
    }
    case OPEN_MODAL: {
      return {
        ...state,
        isModalOpen: true,
      };
    }

    default:
      return state;
  }
}
