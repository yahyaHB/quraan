import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import QuranHome from './components/quranHome/QuranHome.js';
import Tafsiermode from './components/tafseirmode/Tafsiermode.js';
import Home from './components/home';
import Page404 from './components/page404';

import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <div className='app'>
      <Switch>
        <Route exact path='/read-mode' component={QuranHome} />
        <Route exact path='/' component={Home} />
        <Route exact path='/tafsiermood' component={Tafsiermode} />
        <Route component={Page404} />
      </Switch>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
