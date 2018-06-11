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

var Q2 = function (_Component) {
  _inherits(Q2, _Component);

  function Q2(props) {
    _classCallCheck(this, Q2);

    var _this = _possibleConstructorReturn(this, (Q2.__proto__ || Object.getPrototypeOf(Q2)).call(this, props));

    _this.state = {};
    _this.showCheckboxes = _this.showCheckboxes.bind(_this);
    _this.handleSelectInteresting = _this.handleSelectInteresting.bind(_this);
    return _this;
  }

  _createClass(Q2, [{
    key: 'showCheckboxes',
    value: function showCheckboxes(e) {
      e.preventDefault();
      var checkboxes = document.getElementById('checkboxes');
      if (!this.state.showReply) {
        checkboxes.style.display = 'block';
      } else {
        checkboxes.style.display = 'none';
      }
      this.setState({ showReply: !this.state.showReply });
    }
  }, {
    key: 'handleSelectInteresting',
    value: function handleSelectInteresting() {
      var checkboxes = document.querySelectorAll('input[type=checkbox]:checked');
      var arr = Array.prototype.slice.call(checkboxes);
      var interesting = arr.map(function (e) {
        return e.value;
      });
      this.props.storeAnswer({ name: 'interesting', value: interesting });
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
            'Tell us what you are interesting in (freelancing, mentoring, CFing, Contracts....)'
          ),
          _react2.default.createElement(
            'div',
            { className: 'selectBox', onClick: this.showCheckboxes },
            _react2.default.createElement(
              'select',
              { className: 'Q_dropdown' },
              _react2.default.createElement(
                'option',
                null,
                'Choose your interest'
              )
            ),
            _react2.default.createElement('div', { className: 'overSelect' })
          ),
          _react2.default.createElement(
            'div',
            { id: 'checkboxes', className: 'checkboxes', onClick: this.handleSelectInteresting },
            _react2.default.createElement(
              'label',
              { htmlFor: 'Freelancing' },
              _react2.default.createElement('input', { type: 'checkbox', id: 'Freelancing', value: 'Freelancing' }),
              'Freelancing'
            ),
            _react2.default.createElement(
              'label',
              { htmlFor: 'Mentoring' },
              _react2.default.createElement('input', { type: 'checkbox', id: 'Mentoring', value: 'Mentoring' }),
              'Mentoring'
            ),
            _react2.default.createElement(
              'label',
              { htmlFor: 'CFing' },
              _react2.default.createElement('input', { type: 'checkbox', id: 'CFing', value: 'CFing' }),
              'CFing'
            ),
            _react2.default.createElement(
              'label',
              { htmlFor: 'Contracts' },
              _react2.default.createElement('input', { type: 'checkbox', id: 'Contracts', value: 'Contracts' }),
              'Contracts'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'buttons' },
          _react2.default.createElement(_backBtn2.default, { prevQuestion: 'Q1' }),
          _react2.default.createElement(_nextBtn2.default, { nextQuestion: 'Q3' })
        )
      );
    }
  }]);

  return Q2;
}(_react.Component);

Q2.propTypes = {
  storeAnswer: _propTypes2.default.func
};
var mapDispatchToProps = {
  storeAnswer: storeAnswer.compilationOfAnswers

};

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(Q2);