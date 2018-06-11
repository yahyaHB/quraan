'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _storeanswer = require('../../actions/storeanswer');

var storeAnswer = _interopRequireWildcard(_storeanswer);

var _nextBtn = require('../button/nextBtn');

var _nextBtn2 = _interopRequireDefault(_nextBtn);

require('./style.css');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Q1 = function (_Component) {
  _inherits(Q1, _Component);

  function Q1(props) {
    _classCallCheck(this, Q1);

    var _this = _possibleConstructorReturn(this, (Q1.__proto__ || Object.getPrototypeOf(Q1)).call(this, props));

    _this.handleSelectCompus = _this.handleSelectCompus.bind(_this);
    _this.handleSelectChort = _this.handleSelectChort.bind(_this);
    return _this;
  }

  _createClass(Q1, [{
    key: 'handleSelectCompus',
    value: function handleSelectCompus(event) {
      var compus = event.target.value;
      var gaza = document.getElementsByName('gaza');
      var nazareth = document.getElementsByName('nazareth');
      var london = document.getElementsByName('london');
      if (compus === 'Gaza') {
        Array.prototype.slice.call(gaza).map(function (e) {
          return e.removeAttribute('hidden');
        });
        Array.prototype.slice.call(nazareth).map(function (e) {
          return e.setAttribute('hidden', false);
        });
        Array.prototype.slice.call(london).map(function (e) {
          return e.setAttribute('hidden', false);;
        });
      } else if (compus === 'Nazareth') {
        Array.prototype.slice.call(nazareth).map(function (e) {
          return e.removeAttribute('hidden');
        });
        Array.prototype.slice.call(gaza).map(function (e) {
          return e.setAttribute('hidden', false);
        });
        Array.prototype.slice.call(london).map(function (e) {
          return e.setAttribute('hidden', false);;
        });
      } else {
        Array.prototype.slice.call(london).map(function (e) {
          return e.removeAttribute('hidden');
        });
        Array.prototype.slice.call(gaza).map(function (e) {
          return e.setAttribute('hidden', false);
        });
        Array.prototype.slice.call(nazareth).map(function (e) {
          return e.setAttribute('hidden', false);;
        });
      }
      this.props.storeAnswer({ name: 'compus', value: compus });
    }
  }, {
    key: 'handleSelectChort',
    value: function handleSelectChort(event) {
      var cohort = event.target.value;
      this.props.storeAnswer({ name: 'cohort', value: cohort });
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        { className: 'question__container' },
        _react2.default.createElement(
          'div',
          { className: 'q__container' },
          _react2.default.createElement(
            'h1',
            null,
            'What cohort and campus you are in?'
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'h3',
              { className: 'q__h3' },
              'Campus'
            ),
            _react2.default.createElement(
              'select',
              { className: 'Q_dropdown', onChange: this.handleSelectCompus },
              _react2.default.createElement(
                'option',
                { selected: true, disabled: true },
                'Choose Campus'
              ),
              _react2.default.createElement(
                'option',
                { value: 'Gaza' },
                'Gaza'
              ),
              _react2.default.createElement(
                'option',
                { value: 'London' },
                'London'
              ),
              _react2.default.createElement(
                'option',
                { value: 'Nazareth' },
                'Nazareth'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'h3',
              { className: 'q__h3' },
              'Cohort'
            ),
            _react2.default.createElement(
              'select',
              { className: 'Q_dropdown', onChange: this.handleSelectChort },
              _react2.default.createElement(
                'option',
                { selected: true, disabled: true },
                'Choose cohort'
              ),
              _react2.default.createElement(
                'option',
                { name: 'gaza', value: 'FACG3', hidden: true },
                'FACG3'
              ),
              _react2.default.createElement(
                'option',
                { name: 'gaza', value: 'FACG2', hidden: true },
                'FACG2'
              ),
              _react2.default.createElement(
                'option',
                { name: 'gaza', value: 'FACG1', hidden: true },
                'FACG1'
              ),
              _react2.default.createElement(
                'option',
                { name: 'nazareth', value: 'FACN1', hidden: true },
                'FACN1'
              ),
              _react2.default.createElement(
                'option',
                { name: 'nazareth', value: 'FACN2', hidden: true },
                'FACN2'
              ),
              _react2.default.createElement(
                'option',
                { name: 'nazareth', value: 'FACN3', hidden: true },
                'FACN3'
              ),
              _react2.default.createElement(
                'option',
                { name: 'london', value: 'FAC9', hidden: true },
                'FAC9'
              ),
              _react2.default.createElement(
                'option',
                { name: 'london', value: 'FAC10', hidden: true },
                'FAC10'
              ),
              _react2.default.createElement(
                'option',
                { name: 'london', value: 'FAC11', hidden: true },
                'FAC11'
              ),
              _react2.default.createElement(
                'option',
                { name: 'london', value: 'FAC12', hidden: true },
                'FAC12'
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'buttons' },
          _react2.default.createElement('div', null),
          _react2.default.createElement(_nextBtn2.default, { nextQuestion: 'Q2', error: '' })
        )
      );
    }
  }]);

  return Q1;
}(_react.Component);

Q1.propTypes = {
  storeAnswer: _propTypes2.default.func };
var mapDispatchToProps = {
  storeAnswer: storeAnswer.compilationOfAnswers
};

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(Q1);