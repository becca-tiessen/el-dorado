import React from 'react';
import { Grommet } from 'grommet';
import { Switch, Route, Redirect } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import MapContainer from './pages/MapContainer';
import MerchantProfile from './pages/MerchantProfile';
import ROUTES from './constants/routes';

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
    colors: {
      brand: '#FFBD71',
      accent1: '#C73866',
      accent2: '#FE6763',
      accent3: '#FD8F52',
      accent4: '#FFDCA2',
    },
  },
};

function App() {
  return (
    <Grommet theme={theme} full>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path={ROUTES.LISTINGS} component={MapContainer} />
        <Route path={ROUTES.ACCOUNT} component={MerchantProfile} />
        <Redirect to={LandingPage}/>
      </Switch>
    </Grommet>
  );
}

export default App;
