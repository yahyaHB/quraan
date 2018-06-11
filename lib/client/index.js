'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = require('react-redux');

var _reactRouterDom = require('react-router-dom');

var _store = require('./store');

var _store2 = _interopRequireDefault(_store);

var _home = require('./components/home');

var _home2 = _interopRequireDefault(_home);

var _page = require('./components/page404');

var _page2 = _interopRequireDefault(_page);

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(
  _reactRedux.Provider,
  { store: _store2.default },
  _react2.default.createElement(
    _reactRouterDom.BrowserRouter,
    null,
    _react2.default.createElement(
      'div',
      { className: 'app' },
      _react2.default.createElement(
        _reactRouterDom.Switch,
        null,
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _home2.default }),
        _react2.default.createElement(_reactRouterDom.Route, { component: _page2.default })
      )
    )
  )
), document.getElementById('root'));