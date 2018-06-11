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

var _sortStudentsAction = require('../../../actions/sortStudentsAction');

var _sortStudentsAction2 = _interopRequireDefault(_sortStudentsAction);

require('./style.css');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sort = function (_Component) {
  _inherits(Sort, _Component);

  function Sort(props) {
    _classCallCheck(this, Sort);

    var _this = _possibleConstructorReturn(this, (Sort.__proto__ || Object.getPrototypeOf(Sort)).call(this, props));

    _this.handleInputValue = _this.handleInputValue.bind(_this);
    _this.handleSelectValue = _this.handleSelectValue.bind(_this);
    return _this;
  }

  _createClass(Sort, [{
    key: 'handleInputValue',
    value: function handleInputValue(ev) {
      ev.preventDefault();
      var name = ev.target[0].value;
      var allStudents = this.props.students.allStudents;
      this.props.filterStudents(allStudents, { username: name });
    }
  }, {
    key: 'handleSelectValue',
    value: function handleSelectValue(ev) {
      var allStudents = this.props.students.allStudents;
      var sortBy = ev.target.value;
      if (sortBy === 'all') {
        this.props.filterStudents(allStudents, { username: '' });
      } else {
        this.props.sortStudents(allStudents, sortBy);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'sort' },
        _react2.default.createElement(
          'div',
          { className: 'sort_container' },
          _react2.default.createElement(
            'form',
            { style: { position: 'relative' }, onSubmit: this.handleInputValue },
            _react2.default.createElement('input', { type: 'text', className: 'sort_input', placeholder: 'Search for student by name' }),
            _react2.default.createElement(
              'select',
              { onChange: this.handleSelectValue, className: 'sort_select' },
              _react2.default.createElement('option', { value: 'all', disabled: true, selected: true }),
              _react2.default.createElement(
                'option',
                { value: 'alphabetical', className: 'sort_alphabet' },
                'Sort Alphabetical'
              ),
              _react2.default.createElement(
                'option',
                { value: 'last updated', className: 'sort_updated' },
                'last updated'
              ),
              _react2.default.createElement(
                'optgroup',
                { label: 'signup date', className: 'sort_signup' },
                _react2.default.createElement(
                  'option',
                  { value: 'oldest to newest', className: 'sort_updated' },
                  'oldest to newest'
                ),
                _react2.default.createElement(
                  'option',
                  { value: 'newest to oldest', className: 'sort_updated' },
                  'newest to oldest'
                )
              ),
              _react2.default.createElement(
                'option',
                { value: 'all', className: 'sort_signup' },
                'just by name'
              )
            )
          )
        )
      );
    }
  }]);

  return Sort;
}(_react.Component);

Sort.propTypes = {
  students: _propTypes2.default.obj,
  filterStudents: _propTypes2.default.func,
  sortStudents: _propTypes2.default.func
};
var mapDispatchToProps = {
  filterStudents: filterStudentsAction.filterStudents,
  sortStudents: _sortStudentsAction2.default
};

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(Sort);