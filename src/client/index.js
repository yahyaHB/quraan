import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from './store';
import QuranHome from './components/quranHome/QuranHome.js';
import Home from './components/home';
import Page404 from './components/page404';

import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div className='app'>
        <Switch>
          <Route exact path='/' component={QuranHome} />
          <Route exact path='/home' component={Home} />
          <Route component={Page404} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
