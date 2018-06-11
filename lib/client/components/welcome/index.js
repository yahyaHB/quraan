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

var _getQuestion = require('../../actions/getQuestion');

var start = _interopRequireWildcard(_getQuestion);

require('./style.css');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Start = function (_Component) {
  _inherits(Start, _Component);

  function Start(props) {
    _classCallCheck(this, Start);

    var _this = _possibleConstructorReturn(this, (Start.__proto__ || Object.getPrototypeOf(Start)).call(this, props));

    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(Start, [{
    key: 'handleSubmit',
    value: function handleSubmit() {
      this.props.firstQ('Q1');
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        { className: 'start__container' },
        _react2.default.createElement('img', { className: 'start__img', src: './assets/logo1.png' }),
        _react2.default.createElement(
          'h1',
          { className: 'start__h1' },
          'Hi ',
          this.props.user.name
        ),
        _react2.default.createElement(
          'p',
          null,
          'Start building your profile through these simple steps'
        ),
        _react2.default.createElement(
          'div',
          { className: 'start__btn', onClick: this.handleSubmit },
          _react2.default.createElement(
            'h1',
            { className: 'btn__start' },
            'Start'
          ),
          _react2.default.createElement('i', { className: 'fa fa-angle-right  start__btn__w', id: 'fa-angle-right' })
        )
      );
    }
  }]);

  return Start;
}(_react.Component);

Start.propTypes = {
  firstQ: _propTypes2.default.func,
  login: _propTypes2.default.func,
  user: _propTypes2.default.obj
};
var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.login.user
  };
};
var mapDispatchToProps = {
  firstQ: start.firstQ
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Start);