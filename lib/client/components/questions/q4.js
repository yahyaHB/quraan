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

var _backBtn = require('../button/backBtn');

var _backBtn2 = _interopRequireDefault(_backBtn);

require('./style.css');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Q4 = function (_Component) {
  _inherits(Q4, _Component);

  function Q4(props) {
    _classCallCheck(this, Q4);

    var _this = _possibleConstructorReturn(this, (Q4.__proto__ || Object.getPrototypeOf(Q4)).call(this, props));

    _this.state = {};
    _this.handleStackoverflow = _this.handleStackoverflow.bind(_this);
    _this.handleLinkedin = _this.handleLinkedin.bind(_this);
    return _this;
  }

  _createClass(Q4, [{
    key: 'handleStackoverflow',
    value: function handleStackoverflow(ev) {
      var stackoverflow = ev.target.value;
      this.props.storeAnswer({ name: 'stackoverflow', value: stackoverflow });
    }
  }, {
    key: 'handleLinkedin',
    value: function handleLinkedin(ev) {
      var linkedin = ev.target.value;
      this.props.storeAnswer({ name: 'linkedin', value: linkedin });
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
            'Link your social accounts:'
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'h3',
              { className: 'q__h3' },
              'Stackoverflow'
            ),
            _react2.default.createElement('input', { type: 'text', className: 'q__input__stack', onChange: this.handleStackoverflow })
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'h3',
              { className: 'q__h3' },
              'Linkedin'
            ),
            _react2.default.createElement('input', { type: 'text', className: 'q__input__in', onChange: this.handleLinkedin })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'buttons' },
          _react2.default.createElement(_backBtn2.default, { prevQuestion: 'Q3' }),
          _react2.default.createElement(_nextBtn2.default, { nextQuestion: 'Q5' })
        )
      );
    }
  }]);

  return Q4;
}(_react.Component);

Q4.propTypes = {
  storeAnswer: _propTypes2.default.func
};
var mapDispatchToProps = {
  storeAnswer: storeAnswer.compilationOfAnswers

};

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(Q4);