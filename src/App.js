import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter, Route } from 'react-router-dom'

import './config/ReactotronConfig';

import NavBar from './components/NavBar';
import Footer from './components/Footer';

import Home from './screens/Home';
import Contact from './screens/Contact';
import Team from './screens/Team';
import About from './screens/About';
 
import './styles/app.css'

import { store, persistor } from './store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          {/* <NavBar className="App" title="Converse com nossos profissionais" /> */}
          <div className="content">
            <Route path="/" exact render={() => <Home title="Bem vindo a nossa plataforma" />} />
            <Route path="/team" component={Team} />
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
          </div>
          <Footer />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
