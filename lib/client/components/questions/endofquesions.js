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

var bulidProfile = _interopRequireWildcard(_storeanswer);

var _getUserIdAction = require('../../actions/getUserIdAction');

var _getUserIdAction2 = _interopRequireDefault(_getUserIdAction);

var _backBtn = require('../button/backBtn');

var _backBtn2 = _interopRequireDefault(_backBtn);

require('./style.css');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var End = function (_Component) {
  _inherits(End, _Component);

  function End(props) {
    _classCallCheck(this, End);

    var _this = _possibleConstructorReturn(this, (End.__proto__ || Object.getPrototypeOf(End)).call(this, props));

    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(End, [{
    key: 'handleSubmit',
    value: function handleSubmit() {
      this.props.completeLogin();
      this.props.history.push('/profile/' + this.props.name());
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        { className: 'question__container' },
        _react2.default.createElement(
          'div',
          { className: 'q__container end' },
          _react2.default.createElement(
            'h2',
            { className: 'end__h1' },
            'Great!'
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'p',
              { className: 'end__p' },
              'Thanks for contacting us Welcome to FAC Jobs again. Now, wait for the manager to contact you.'
            ),
            _react2.default.createElement('i', { className: 'fa fa-heart', style: { fontSize: '48px', color: 'white' } })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'buttons' },
          _react2.default.createElement(_backBtn2.default, { prevQuestion: 'Q6' }),
          _react2.default.createElement(
            'div',
            { className: 'next__btn end__btn', onClick: this.handleSubmit },
            _react2.default.createElement(
              'h1',
              { className: 'btn__next' },
              'Go to profile'
            ),
            _react2.default.createElement('i', { className: 'fa fa-angle-right next__btn__q', id: 'fa-angle-right' })
          )
        )
      );
    }
  }]);

  return End;
}(_react.Component);

End.propTypes = {
  completeLogin: _propTypes2.default.func,
  name: _propTypes2.default.func,
  history: _propTypes2.default.obj,
  completeSaveData: _propTypes2.default.obj
};

var mapDispatchToProps = {
  completeLogin: bulidProfile.saveAnswer,
  name: _getUserIdAction2.default

};
exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(End);