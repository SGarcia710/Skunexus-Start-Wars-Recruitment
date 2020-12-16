export const getPlanetsState = (store) => store.planets;

export const getSelectedPlanet = (store) =>
  getPlanetsState(store) ? getPlanetsState(store).selectedPlanet : null;

export const getIsModalOpen = (store) =>
  getPlanetsState(store) ? getPlanetsState(store).isModalOpen : null;

// these can be improved memoizing them with reselect
