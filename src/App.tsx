import React from 'react';
import Router from '~/routes/Router';
import {CarProvider} from '~/contexts/CarContext';

const App = () => (
  <CarProvider>
    <Router />
  </CarProvider>
);

export default App;
