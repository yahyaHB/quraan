'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _reactLoaders = require('react-loaders');

var _reactSpinners = require('react-spinners');

var _Navbar = require('../navbar/Navbar');

var _Navbar2 = _interopRequireDefault(_Navbar);

var _Footer = require('../footer/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _StudentProfile = require('./StudentProfile/StudentProfile.js');

var _StudentProfile2 = _interopRequireDefault(_StudentProfile);

var _EmailContact = require('../emailContact/EmailContact.js');

var _EmailContact2 = _interopRequireDefault(_EmailContact);

var _studentProfile = require('../../actions/studentProfile');

var studentDataAction = _interopRequireWildcard(_studentProfile);

require('./StudentProfile/StudentProfile.css');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StudentProfile = function (_Component) {
  _inherits(StudentProfile, _Component);

  function StudentProfile(props) {
    _classCallCheck(this, StudentProfile);

    var _this = _possibleConstructorReturn(this, (StudentProfile.__proto__ || Object.getPrototypeOf(StudentProfile)).call(this, props));

    _this.state = { coming: '' };
    return _this;
  }

  _createClass(StudentProfile, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var fetchStudentData = this.props.fetchStudentData;

      fetchStudentData(this.props.match.params.student_name);
      if (this.props.history.location.state !== undefined) {

        this.setState({ coming: this.props.history.location.state.coming });
      } else {
        this.setState({ coming: '' });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          isFetching = _props.isFetching,
          error = _props.error,
          studentData = _props.studentData;


      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          null,
          isFetching ? _react2.default.createElement(
            'center',
            { className: 'center studentProfile__BeatLoader' },
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
            _react2.default.createElement(_Navbar2.default, { coming: this.state.coming, studentData: studentData, propsNav: this.props }),
            _react2.default.createElement(_StudentProfile2.default, {
              coming: this.state.coming,
              studentData: studentData
            }),
            _react2.default.createElement(_Footer2.default, null)
          ),
          error && _react2.default.createElement(
            'div',
            { className: 'studentData-error' },
            error
          )
        ),
        this.state.coming === 'AdminDashboard' ? _react2.default.createElement(_EmailContact2.default, { studentData: studentData }) : _react2.default.createElement('div', null)
      );
    }
  }]);

  return StudentProfile;
}(_react.Component);

StudentProfile.propTypes = {
  fetchStudentData: _propTypes2.default.func,
  studentData: _propTypes2.default.array,
  error: _propTypes2.default.string,
  isFetching: _propTypes2.default.bool,
  student_id: _propTypes2.default.string,
  history: _propTypes2.default.object,
  match: _propTypes2.default.object
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    studentData: state.studentData.studentData,
    error: state.studentData.error,
    isFetching: state.studentData.isFetching
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, studentDataAction)(StudentProfile);