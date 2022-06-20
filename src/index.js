import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import ToggleColorModeProvider from './utils/ToggleColorMode';
import App from './components/App';
import store from './app/store';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <ToggleColorModeProvider>
      <Router>
        <App />
      </Router>
    </ToggleColorModeProvider>
  </Provider>,
  document.getElementById('root')
);
