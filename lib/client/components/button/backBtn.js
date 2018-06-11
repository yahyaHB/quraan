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

var ButtonBack = function (_Component) {
  _inherits(ButtonBack, _Component);

  function ButtonBack(props) {
    _classCallCheck(this, ButtonBack);

    var _this = _possibleConstructorReturn(this, (ButtonBack.__proto__ || Object.getPrototypeOf(ButtonBack)).call(this, props));

    _this.handlePrevious = _this.handlePrevious.bind(_this);
    return _this;
  }

  _createClass(ButtonBack, [{
    key: 'handlePrevious',
    value: function handlePrevious() {
      this.props.firstQ(this.props.prevQuestion);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'previous__btn', onClick: this.handlePrevious },
        _react2.default.createElement('i', { className: 'fa fa-angle-left previous__btn__q', id: 'fa-angle-left' }),
        _react2.default.createElement(
          'h1',
          { className: 'btn__previous', id: 'btn__previous' },
          'Previous'
        )
      );
    }
  }]);

  return ButtonBack;
}(_react.Component);

ButtonBack.propTypes = {
  prevQuestion: _propTypes2.default.string,
  firstQ: _propTypes2.default.func
};

var mapDispatchToProps = {
  firstQ: start.firstQ

};
exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(ButtonBack);