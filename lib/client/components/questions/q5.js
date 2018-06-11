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

var Q5 = function (_Component) {
  _inherits(Q5, _Component);

  function Q5(props) {
    _classCallCheck(this, Q5);

    var _this = _possibleConstructorReturn(this, (Q5.__proto__ || Object.getPrototypeOf(Q5)).call(this, props));

    _this.state = {};
    _this.handleOpportunity = _this.handleOpportunity.bind(_this);
    return _this;
  }

  _createClass(Q5, [{
    key: 'handleOpportunity',
    value: function handleOpportunity() {
      var opportunity = document.querySelector('input[name="color"]:checked').value;
      this.props.storeAnswer({ name: 'opportunity', value: opportunity });
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
            'Tell us if you are looking for opportunity now? '
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'div',
              { className: 'custom-radios' },
              _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement('input', { type: 'radio', id: 'color-3', name: 'color', value: 'Urgent',
                  onClick: this.handleOpportunity }),
                _react2.default.createElement(
                  'label',
                  { htmlFor: 'color-3' },
                  _react2.default.createElement(
                    'span',
                    null,
                    _react2.default.createElement('img', { src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg', alt: 'Checked Icon' })
                  ),
                  'Urgent'
                )
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement('input', { type: 'radio', id: 'color-1', name: 'color', value: 'Kind Of',
                  onClick: this.handleOpportunity }),
                _react2.default.createElement(
                  'label',
                  { htmlFor: 'color-1' },
                  _react2.default.createElement(
                    'span',
                    null,
                    _react2.default.createElement('img', { src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg', alt: 'Checked Icon' })
                  ),
                  'Kind Of'
                )
              ),
              _react2.default.createElement('br', null),
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement('input', { type: 'radio', id: 'color-2', name: 'color', value: 'Not Intrested',
                  onClick: this.handleOpportunity }),
                _react2.default.createElement(
                  'label',
                  { htmlFor: 'color-2' },
                  _react2.default.createElement(
                    'span',
                    null,
                    _react2.default.createElement('img', { src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg', alt: 'Checked Icon' })
                  ),
                  'Not Intrested'
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'buttons' },
          _react2.default.createElement(_backBtn2.default, { prevQuestion: 'Q4' }),
          _react2.default.createElement(_nextBtn2.default, { nextQuestion: 'Q6' })
        )
      );
    }
  }]);

  return Q5;
}(_react.Component);

Q5.propTypes = {
  storeAnswer: _propTypes2.default.func
};
var mapDispatchToProps = {
  storeAnswer: storeAnswer.compilationOfAnswers

};

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(Q5);