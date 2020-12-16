import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from '../components/App';
import Films from '../components/Films';
import PlanetDetail from '../components/PlanetDetail';
import Residents from '../components/Residents';

const Router = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={App} />
      <Route exact path="/films" component={Films} />
      <Route exact path="/residents" component={Residents} />
      <Route exact path="/planet-detail" component={PlanetDetail} />
    </BrowserRouter>
  );
};

export default Router;
