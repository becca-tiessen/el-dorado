import React from 'react';
import { Grommet } from 'grommet';
import { Switch, Route, Redirect } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import MapContainer from './pages/MapContainer';
import LoginPage from './pages/LoginPage';
import ROUTES from './constants/routes';
import COLOURS from './constants/colours';

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
    colors: {
      brand: COLOURS.peach,
      accent1: COLOURS.plum,
      accent2: COLOURS.salmon,
      accent3: COLOURS.orange,
      accent4: COLOURS.gold,
    },
  },
};

function App() {
  return (
    <Grommet theme={theme} full>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path={ROUTES.LISTINGS} component={MapContainer} />
        <Route path={ROUTES.ACCOUNT} component={LoginPage} />
        <Redirect to={{LandingPage}}/>
      </Switch>
    </Grommet>
  );
}

export default App;
