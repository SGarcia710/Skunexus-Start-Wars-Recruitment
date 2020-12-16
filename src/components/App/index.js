import Component from './App';
import { connect } from 'react-redux';
import { getIsModalOpen, getSelectedPlanet } from '../../redux/selectors';
import { closeModal } from '../../redux/actions';

export default connect(
  (state) => ({
    selectedPlanet: getSelectedPlanet(state),
    isModalOpen: getIsModalOpen(state),
  }),
  { closeModal }
)(Component);
