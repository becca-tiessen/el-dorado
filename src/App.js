import React from 'react';
import { Grommet } from 'grommet';
import { Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import GarageMap from './pages/GarageMap';
import GarageProfile from './pages/GarageProfile';

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
        <Route path="/" exact component={Home} />
        <Route path="/map" component={GarageMap} />
        <Route path="/garageProfile" component={GarageProfile} />
      </Switch>
    </Grommet>
  );
}

export default App;
