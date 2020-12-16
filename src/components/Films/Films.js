import './Films.css';
import { useEffect, useState } from 'react';
import Grid from '../Grid';
import Loader from '../Loader';
import { fetchItemsData } from '../../utils';

function Films({ location }) {
  const INITIAL_DATA = {
    header: [
      'episode_id',
      'title',
      'producer',
      'director',
      'release_date',
      'opening_crawl',
    ],
    values: [],
    actions: [],
  };
  const { films, name } = location.state;
  const [data, setData] = useState(INITIAL_DATA);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchItemsData(films, (filmsWithInfo) => {
      setData({ ...data, values: filmsWithInfo });
      setLoading(false);
    });
  }, []);

  return (
    <div className="Container">
      <h1 className="pt-8 text-3xl text-center font-bold mb-6 text-gray-700">
        {name}'s Films
      </h1>

      {!!loading ? <Loader /> : <Grid data={data} />}
    </div>
  );
}

export default Films;
