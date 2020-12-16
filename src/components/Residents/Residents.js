import './Residents.css';
import { useEffect, useState } from 'react';
import Grid from '../Grid';
import Loader from '../Loader';
import { fetchItemsData } from '../../utils';

function Residents({ location }) {
  const INITIAL_DATA = {
    header: [
      'name',
      'birth_year',
      'gender',
      'height',
      'mass',
      'hair_color',
      'skin_color',
      'eye_color',
    ],
    values: [],
    actions: [],
  };
  const { residents, name } = location.state;
  const [data, setData] = useState(INITIAL_DATA);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchItemsData(residents, (residentsWithInfo) => {
      setData({ ...data, values: residentsWithInfo });
      setLoading(false);
    });
  }, []);

  return (
    <div className="Container">
      <h1 className="pt-8 text-3xl text-center font-bold mb-6 text-gray-700">
        {name}'s Residents
      </h1>

      {!!loading ? <Loader /> : <Grid data={data} />}
    </div>
  );
}

export default Residents;
