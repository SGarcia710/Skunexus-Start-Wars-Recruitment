import { connect } from 'react-redux';
import { setSelectedPlanet, openModal } from '../../redux/actions';
import Component from './Planets';

export default connect(null, { setSelectedPlanet, openModal })(Component);
