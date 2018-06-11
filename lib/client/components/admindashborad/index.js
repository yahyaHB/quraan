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

var _students = require('./students');

var _students2 = _interopRequireDefault(_students);

var _filter = require('./filter');

var _filter2 = _interopRequireDefault(_filter);

var _reactSpinners = require('react-spinners');

var _viewStudentsAction = require('../../actions/viewStudentsAction');

var viewStudentsAction = _interopRequireWildcard(_viewStudentsAction);

var _Navbar = require('../navbar/Navbar.js');

var _Navbar2 = _interopRequireDefault(_Navbar);

var _Footer = require('../footer/Footer.js');

var _Footer2 = _interopRequireDefault(_Footer);

require('./style.css');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AdminDashboard = function (_Component) {
  _inherits(AdminDashboard, _Component);

  function AdminDashboard() {
    _classCallCheck(this, AdminDashboard);

    return _possibleConstructorReturn(this, (AdminDashboard.__proto__ || Object.getPrototypeOf(AdminDashboard)).apply(this, arguments));
  }

  _createClass(AdminDashboard, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var fetchStudentsView = this.props.fetchStudentsView;

      fetchStudentsView();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props$data = this.props.data,
          isFetching = _props$data.isFetching,
          error = _props$data.error,
          dataStudents = _props$data.dataStudents,
          dataStudentsToFilter = _props$data.dataStudentsToFilter;


      return _react2.default.createElement(
        'div',
        { className: 'admindashboard' },
        _react2.default.createElement(_Navbar2.default, { allStudents: dataStudents }),
        _react2.default.createElement(
          'div',
          { className: 'admindashboard__container' },
          _react2.default.createElement(
            'div',
            { className: 'admindashboard__students' },
            isFetching ? _react2.default.createElement(
              'center',
              { className: 'admindashboard__beatLoader' },
              _react2.default.createElement(_reactSpinners.BeatLoader, { color: '#66D49D', loading: isFetching, width: 200 })
            ) : dataStudentsToFilter.length === 0 ? _react2.default.createElement(
              'div',
              { className: 'admindashboard__beatLoader' },
              'Sorry, There Is No Result.'
            ) : dataStudentsToFilter.map(function (dataStudent, i) {
              while (dataStudent !== undefined && i < dataStudentsToFilter.length) {
                return _react2.default.createElement(_students2.default, { props: _this2.props,
                  dataStudent: dataStudent, key: dataStudent.id });
              }
            }),
            error && _react2.default.createElement(
              'div',
              { className: 'data-error' },
              error
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'adm indashboard__filter' },
            _react2.default.createElement(_filter2.default, { allStudents: dataStudents })
          )
        ),
        _react2.default.createElement(_Footer2.default, null)
      );
    }
  }]);

  return AdminDashboard;
}(_react.Component);

AdminDashboard.propTypes = {
  fetchStudentsView: _propTypes2.default.func,
  data: _propTypes2.default.object,
  dataStudents: _propTypes2.default.object,
  error: _propTypes2.default.string,
  isFetching: _propTypes2.default.bool
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    data: state.students,
    error: state.error,
    isFetching: state.isFetching
  };
};
var mapDispatchToProps = {
  fetchStudentsView: viewStudentsAction.fetchStudentsView
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(AdminDashboard);