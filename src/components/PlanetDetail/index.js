import Component from './PlanetDetail';
import { getSelectedPlanet } from '../../redux/selectors';
import { connect } from 'react-redux';

export default connect((state) => ({
  selectedPlanet: getSelectedPlanet(state),
}))(Component);
