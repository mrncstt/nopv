import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter, Route } from 'react-router-dom'

import './config/ReactotronConfig';

import Footer from './components/Footer';

import Home from './screens/Home';
import Contact from './screens/Contact';
import Faq from './screens/Faq';
import About from './screens/About';
import Price from './screens/Price';
import History from './screens/History';
 
import './styles/app.css'

import { store, persistor } from './store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <div className="content">
            <Route path="/" exact render={() => <Home title="Bem vindo a nossa plataforma" />} />
            <Route path="/faq" component={Faq} />
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
            <Route path="/price" component={Price} />
            <Route path="/history" component={History} />
          </div>
          <Footer />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
