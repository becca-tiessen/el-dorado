import React from 'react';
import {Grommet} from 'grommet';
import Home from './pages/Home/Home';

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
      <Home/>
    </Grommet>
  );
}

export default App;
