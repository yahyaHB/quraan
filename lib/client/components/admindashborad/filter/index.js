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

var _filterStudentsAction = require('../../../actions/filterStudentsAction');

var filterStudentsAction = _interopRequireWildcard(_filterStudentsAction);

require('./style.css');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Filter = function (_Component) {
  _inherits(Filter, _Component);

  function Filter(props) {
    _classCallCheck(this, Filter);

    var _this = _possibleConstructorReturn(this, (Filter.__proto__ || Object.getPrototypeOf(Filter)).call(this, props));

    _this.state = {
      options: [],
      status: null,
      campus: null,
      cohort: null,
      skills: null,
      interests: null
    };

    _this._handleDataChange = _this._handleDataChange.bind(_this);
    _this._handleFilterSubmit = _this._handleFilterSubmit.bind(_this);
    return _this;
  }

  _createClass(Filter, [{
    key: '_handleDataChange',
    value: function _handleDataChange(ev) {
      var campus = ev.target.value;
      var gaza = ['FACG1', 'FACG2', 'FACG3', 'FACG4'];
      var london = ['FAC-1', 'FAC-2', 'FAC-3', 'FAC-4', 'FAC-5', 'FAC-6', 'FAC-7', 'FAC-8', 'FAC-9', 'FAC-10', 'FAC-11', 'FAC-12'];
      var nazareth = ['FACN1', 'FACN2', 'FACN3'];

      this.setState(_defineProperty({}, ev.target.name, ev.target.value));

      switch (campus) {
        case 'Gaza':
          return this.setState({
            options: gaza
          });
        case 'London':
          return this.setState({
            options: london
          });
        case 'Nazareth':
          return this.setState({
            options: nazareth
          });
        default:
          return [];
      }
    }
  }, {
    key: '_handleFilterSubmit',
    value: function _handleFilterSubmit(ev) {
      ev.preventDefault();
      var allStudents = this.props.allStudents;
      var _state = this.state,
          status = _state.status,
          campus = _state.campus,
          cohort = _state.cohort,
          skills = _state.skills,
          interests = _state.interests;

      this.props.filterStudents(allStudents, {
        status: status,
        campus: campus,
        cohort: cohort,
        skills: skills,
        interests: interests
      });
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        { className: 'filter' },
        _react2.default.createElement(
          'div',
          { className: 'filter__text' },
          'Filter By: '
        ),
        _react2.default.createElement(
          'form',
          { className: 'filter__form' },
          _react2.default.createElement(
            'select',
            { className: 'filter__select', onChange: this._handleDataChange,
              value: this.state.status, name: 'status' },
            _react2.default.createElement(
              'option',
              { value: '', disabled: true, selected: true },
              'Status'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Urgent' },
              'Urgent'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Kind Of' },
              'Kind Of'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Not Intersted' },
              'Not Intersted'
            ),
            _react2.default.createElement(
              'option',
              { value: '' },
              'All Status'
            )
          ),
          _react2.default.createElement(
            'select',
            { className: 'filter__select', onChange: this._handleDataChange,
              value: this.state.campus, name: 'campus' },
            _react2.default.createElement(
              'option',
              { value: '', disabled: true, selected: true },
              'Campus'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Gaza' },
              'Gaza'
            ),
            _react2.default.createElement(
              'option',
              { value: 'London' },
              'London'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Nazareth' },
              'Nazareth'
            ),
            _react2.default.createElement(
              'option',
              { value: '' },
              'All Cumpuses'
            )
          ),
          _react2.default.createElement(
            'select',
            { className: 'filter__select', onChange: this._handleDataChange,
              value: this.state.cohort, name: 'cohort' },
            _react2.default.createElement(
              'option',
              { value: '', disabled: true, selected: true },
              'cohort'
            ),
            ';',
            this.state.options.map(function (cohort, index) {

              return _react2.default.createElement(
                'option',
                { value: cohort, key: index },
                cohort
              );
            }),
            _react2.default.createElement(
              'option',
              { value: '' },
              'All Cohorts'
            )
          ),
          _react2.default.createElement(
            'select',
            { className: 'filter__select', onChange: this._handleDataChange,
              value: this.state.skills, name: 'skills' },
            _react2.default.createElement(
              'option',
              { value: '', disabled: true, selected: true },
              'Skills'
            ),
            _react2.default.createElement(
              'option',
              { value: 'HTML' },
              'HTML'
            ),
            _react2.default.createElement(
              'option',
              { value: 'CSS' },
              'CSS'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Node.js' },
              'Node.js'
            ),
            _react2.default.createElement(
              'option',
              { value: 'React.js' },
              'React.js'
            ),
            _react2.default.createElement(
              'option',
              { value: '' },
              'Any Skill'
            )
          ),
          _react2.default.createElement(
            'select',
            { className: 'filter__select', onChange: this._handleDataChange,
              value: this.state.interests, name: 'interests' },
            _react2.default.createElement(
              'option',
              { value: '', disabled: true, selected: true },
              'Interest'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Freelancing' },
              'Freelancing'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Mentoring' },
              'Mentoring'
            ),
            _react2.default.createElement(
              'option',
              { value: 'CFing' },
              'CFing'
            ),
            _react2.default.createElement(
              'option',
              { value: '' },
              'Any interest'
            )
          ),
          _react2.default.createElement('input', { type: 'submit', value: 'Search', className: 'filter__search',
            onClick: this._handleFilterSubmit })
        )
      );
    }
  }]);

  return Filter;
}(_react.Component);

Filter.propTypes = {
  allStudents: _propTypes2.default.array,
  filterStudents: _propTypes2.default.func
};

var mapDispatchToProps = {
  filterStudents: filterStudentsAction.filterStudents
};

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(Filter);