'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _emailsendingAction = require('../../actions/emailsendingAction');

var _emailsendingAction2 = _interopRequireDefault(_emailsendingAction);

var _reactRedux = require('react-redux');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./emailContact.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EmailContact = function (_Component) {
  _inherits(EmailContact, _Component);

  function EmailContact(props) {
    _classCallCheck(this, EmailContact);

    var _this = _possibleConstructorReturn(this, (EmailContact.__proto__ || Object.getPrototypeOf(EmailContact)).call(this, props));

    _this.state = {
      error: undefined
    };
    _this.close = _this.close.bind(_this);
    _this.handlesubmit = _this.handlesubmit.bind(_this);
    return _this;
  }

  _createClass(EmailContact, [{
    key: 'close',
    value: function close(ev) {
      ev('.chat').slideToggle(300, 'swing');
      ev('.chat-message-counter').fadeToggle(300, 'swing');
    }
  }, {
    key: 'handlesubmit',
    value: function handlesubmit(event) {
      event.preventDefault();
      if (event.target[1].value.trim() !== '') {

        var data = {
          recieveremail: event.target[2].value,
          msgContent: event.target[1].value
        };
        this.props.send(data);
        event.target[1].value = '';
      } else {
        this.setState({
          error: 'write something'
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (!this.props.studentData) return _react2.default.createElement('div', null);
      var arr = this.props.studentData.map(function (item) {
        return _react2.default.createElement(
          'div',
          { id: 'live-chat', key: item.id },
          _react2.default.createElement(
            'header',
            { className: 'clearfix' },
            _react2.default.createElement(
              'button',
              { onClick: _this2.close.bind(_this2), className: 'chat-close' },
              'x'
            ),
            _react2.default.createElement(
              'h4',
              { className: 'contact_text' },
              item.username
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'chat' },
            _react2.default.createElement(
              'div',
              { className: 'chat-history' },
              _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                  'div',
                  { className: 'chat-message clearfix' },
                  _react2.default.createElement(
                    'div',
                    { className: 'chat-message-content clearfix' },
                    _this2.props.message.success !== '' ? _react2.default.createElement(
                      'h3',
                      { style: { color: 'green' } },
                      'Message Sent'
                    ) : _this2.state.error !== undefined ? _react2.default.createElement(
                      'h3',
                      { style: { color: 'orange' } },
                      _this2.state.error
                    ) : item.email !== '' ? _react2.default.createElement(
                      'h3',
                      { style: { color: 'blue' } },
                      'Send Email'
                    ) : _react2.default.createElement(
                      'h3',
                      { style: { color: 'red' } },
                      'User did not have Email'
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              'form',
              { onSubmit: _this2.handlesubmit },
              _react2.default.createElement(
                'fieldset',
                { className: 'fieldset' },
                _react2.default.createElement('input', { type: 'text', className: 'contact_input  msgInput', placeholder: 'Type your message\u2026', autoFocus: true }),
                _react2.default.createElement('input', { className: 'contact_input', value: item.email, type: 'hidden' }),
                item.email !== '' ? _react2.default.createElement(
                  'button',
                  { type: 'submit', className: 'sendMailBtn' },
                  'Send'
                ) : _react2.default.createElement(
                  'button',
                  { type: 'submit', className: 'sendMailBtn', disabled: true },
                  'Send'
                )
              )
            )
          )
        );
      });

      return _react2.default.createElement(
        'div',
        null,
        arr
      );
    }
  }]);

  return EmailContact;
}(_react.Component);

EmailContact.propTypes = {
  studentData: _propTypes2.default.array,
  sendData: _propTypes2.default.array,
  filter: _propTypes2.default.func,
  coming: _propTypes2.default.str,
  message: _propTypes2.default.obj,
  send: _propTypes2.default.func
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    message: state.send
  };
};
var mapDispatchToProps = {
  send: _emailsendingAction2.default
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(EmailContact);