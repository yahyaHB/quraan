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

var _reactRouterDom = require('react-router-dom');

var _welcome = require('../welcome/');

var _welcome2 = _interopRequireDefault(_welcome);

var _q = require('../questions/q1.js');

var _q2 = _interopRequireDefault(_q);

var _q3 = require('../questions/q2.js');

var _q4 = _interopRequireDefault(_q3);

var _q5 = require('../questions/q3.js');

var _q6 = _interopRequireDefault(_q5);

var _q7 = require('../questions/q4.js');

var _q8 = _interopRequireDefault(_q7);

var _q9 = require('../questions/q5.js');

var _q10 = _interopRequireDefault(_q9);

var _q11 = require('../questions/q6.js');

var _q12 = _interopRequireDefault(_q11);

var _endofquesions = require('../questions/endofquesions.js');

var _endofquesions2 = _interopRequireDefault(_endofquesions);

require('./style.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Form = function (_Component) {
  _inherits(Form, _Component);

  function Form(props) {
    _classCallCheck(this, Form);

    var _this = _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, props));

    _this.renderView = _this.renderView.bind(_this);
    return _this;
  }

  _createClass(Form, [{
    key: 'renderView',
    value: function renderView() {
      var questionNumber = this.props.questionNumber;


      switch (questionNumber) {
        case 'Welcome':
          return _react2.default.createElement(_welcome2.default, null);
        case 'Q1':
          return _react2.default.createElement(_q2.default, null);
        case 'Q2':
          return _react2.default.createElement(_q4.default, null);
        case 'Q3':
          return _react2.default.createElement(_q6.default, null);
        case 'Q4':
          return _react2.default.createElement(_q8.default, null);
        case 'Q5':
          return _react2.default.createElement(_q10.default, null);
        case 'Q6':
          return _react2.default.createElement(_q12.default, null);
        case 'End':
          return _react2.default.createElement(_reactRouterDom.Route, { component: _endofquesions2.default });
        default:
          return _react2.default.createElement(_welcome2.default, null);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { id: 'questions', className: 'questions' },
        _react2.default.createElement(
          'div',
          { id: 'start', className: 'start' },
          _react2.default.createElement(
            'div',
            { className: 'container-question' },
            this.renderView()
          )
        )
      );
    }
  }]);

  return Form;
}(_react.Component);

Form.propTypes = {
  questionNumber: _propTypes2.default.string,
  onClick: _propTypes2.default.string

};

var mapStateToProps = function mapStateToProps(state) {
  return { questionNumber: state.data.questionNumber };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, null)(Form);