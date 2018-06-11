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

var ButtonNext = function (_Component) {
  _inherits(ButtonNext, _Component);

  function ButtonNext(props) {
    _classCallCheck(this, ButtonNext);

    var _this = _possibleConstructorReturn(this, (ButtonNext.__proto__ || Object.getPrototypeOf(ButtonNext)).call(this, props));

    _this.state = {};
    _this.handleNext = _this.handleNext.bind(_this);
    return _this;
  }

  _createClass(ButtonNext, [{
    key: 'handleNext',
    value: function handleNext() {
      var error = this.props.firstQ(this.props.nextQuestion);
      if (this.props.classname !== undefined) {

        this.setState({ classname: this.props.classname, error: error });
      } else {
        this.setState({ classname: 'errorMessage', error: error });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'buttonWithErrorMessage' },
        _react2.default.createElement(
          'h4',
          { className: this.state.classname },
          this.state.error
        ),
        _react2.default.createElement(
          'div',
          { className: 'next__btn', onClick: this.handleNext },
          _react2.default.createElement(
            'h1',
            { className: 'btn__next' },
            'Next'
          ),
          _react2.default.createElement('i', { className: 'fa fa-angle-right next__btn__q', id: 'fa-angle-right' })
        )
      );
    }
  }]);

  return ButtonNext;
}(_react.Component);

ButtonNext.propTypes = {
  nextQuestion: _propTypes2.default.string,
  compus: _propTypes2.default.string,
  chort: _propTypes2.default.string,
  interesting: _propTypes2.default.string,
  stackoverflow: _propTypes2.default.string,
  linkedin: _propTypes2.default.string,
  skills: _propTypes2.default.obj,
  classname: _propTypes2.default.obj,
  firstQ: _propTypes2.default.func
};

var mapDispatchToProps = {
  firstQ: start.firstQ
};
exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(ButtonNext);