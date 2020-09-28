import React from 'react';
import { Rutas } from './routers/Rutas';
import { Provider } from 'react-redux';

import { Store } from './hooks/Store';


function App() {
  return (
    <Provider store={Store}>
      
      <Rutas/>

    </Provider>
  );
}

export default App;
