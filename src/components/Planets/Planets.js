import './Planets.css';

import Grid from '../Grid';
import { useCallback, useEffect, useState } from 'react';
import Axios from 'axios';
import Loader from '../Loader';
import { useHistory } from 'react-router-dom';

function Planets(props) {
  const history = useHistory();
  const INITIAL_DATA = {
    header: [
      'name',
      'rotation_period',
      'orbital_period',
      'diameter',
      'climate',
      'gravity',
      'terrain',
      'surface_water',
      'population',
      'residents',
      'films',
    ],
    values: [],
    actions: [
      {
        label: 'Go to Films',
        action: (row) => {
          history.push({
            pathname: '/films',
            state: { ...row },
          });
        },
        type: 'films',
      },
      {
        label: 'Go to Residents',
        action: (row) => {
          history.push({
            pathname: '/residents',
            state: { ...row },
          });
        },
        type: 'residents',
      },
      {
        label: 'Edit planet',
        action: (row) => {
          props.setSelectedPlanet(row);
          props.openModal();
        },
        type: '',
      },
      {
        label: 'Details',
        action: (row) => {
          props.setSelectedPlanet(row);
          history.push({
            pathname: '/planet-detail',
            state: { ...row },
          });
        },
        type: '',
      },
    ],
  };

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(INITIAL_DATA);
  const fetchData = useCallback(async () => {
    try {
      const planetsResponse = (
        await Axios.get('https://swapi.dev/api/planets/')
      ).data;
      setData({ ...data, values: planetsResponse.results });
      setLoading(false);
    } catch (error) {
      console.log('There was an error fetching planets', error);
    }
  }, []);
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">{!!loading ? <Loader /> : <Grid data={data} />}</div>
  );
}

export default Planets;
