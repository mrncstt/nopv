import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter, Route } from 'react-router-dom'

import './config/ReactotronConfig';

import NavBar from './components/NavBar';

import Home from './screens/Home';
import Bitcoins from './screens/Bitcoins';
import DirectTreasure from './screens/DirectTreasure';
import About from './screens/About';
 
import './styles/app.css'

import { store, persistor } from './store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <NavBar className="App" title="Veja seus investimentos" />
          <div className="content">
            <Route path="/" exact render={() => <Home title="Bem vindo ao nosso site" />} />
            <Route path="/bitcoins" exact render={() => <Bitcoins title="Meus Bitcoins" />} />
            <Route path="/direct-treasure" component={DirectTreasure} />
            <Route path="/about" component={About} />
          </div>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
