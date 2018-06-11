'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactLoaders = require('react-loaders');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _reactSpinners = require('react-spinners');

var _getStudentDataToSettings = require('../../actions/getStudentDataToSettings');

var _getStudentDataToSettings2 = _interopRequireDefault(_getStudentDataToSettings);

var _settingsComponent = require('./settingsComponent');

var _settingsComponent2 = _interopRequireDefault(_settingsComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MainSettings = function (_Component) {
  _inherits(MainSettings, _Component);

  function MainSettings() {
    _classCallCheck(this, MainSettings);

    return _possibleConstructorReturn(this, (MainSettings.__proto__ || Object.getPrototypeOf(MainSettings)).apply(this, arguments));
  }

  _createClass(MainSettings, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.data();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          isFetching = _props.isFetching,
          error = _props.error,
          getStudentDataToSettings = _props.getStudentDataToSettings;


      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          null,
          isFetching ? _react2.default.createElement(
            'center',
            { className: 'center', style: { marginTop: '250px' } },
            _react2.default.createElement(_reactSpinners.BeatLoader, { color: '#66D49D', loading: isFetching, width: 200 }),
            _react2.default.createElement(_reactLoaders.Loader, { loaded: false, type: 'ball-pulse-rise' }),
            _react2.default.createElement(
              'h1',
              null,
              'Info inbound',
              _react2.default.createElement('br', null),
              'Wait!!'
            )
          ) : _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_settingsComponent2.default, {
              studentData: getStudentDataToSettings
            })
          ),
          error && _react2.default.createElement(
            'div',
            { className: 'studentData-error' },
            error
          )
        )
      );
    }
  }]);

  return MainSettings;
}(_react.Component);

MainSettings.propTypes = {
  data: _propTypes2.default.func,
  getStudentDataToSettings: _propTypes2.default.array,
  error: _propTypes2.default.string,
  isFetching: _propTypes2.default.bool
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    getStudentDataToSettings: state.getStudentDataToSettings.studentData,
    error: state.getStudentDataToSettings.error,
    isFetching: state.getStudentDataToSettings.isFetching
  };
};

var mapDispatchToProps = {
  data: _getStudentDataToSettings2.default

};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(MainSettings);