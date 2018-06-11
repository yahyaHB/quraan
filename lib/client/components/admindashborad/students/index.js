'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./style.css');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Students = function (_Component) {
  _inherits(Students, _Component);

  function Students(props) {
    _classCallCheck(this, Students);

    var _this = _possibleConstructorReturn(this, (Students.__proto__ || Object.getPrototypeOf(Students)).call(this, props));

    _this._handleCircleColor = _this._handleCircleColor.bind(_this);
    _this.view = _this.view.bind(_this);

    return _this;
  }

  _createClass(Students, [{
    key: '_handleCircleColor',
    value: function _handleCircleColor(status) {
      var objColor = { backgroundColor: '' };
      status === 'Urgent' ? objColor.backgroundColor = 'green' : status === 'Kind Of' ? objColor.backgroundColor = 'orange' : objColor.backgroundColor = 'red';

      return objColor;
    }
  }, {
    key: 'view',
    value: function view() {
      this.props.props.history.push({
        pathname: '/profile/' + this.props.dataStudent.username,
        state: { coming: 'AdminDashboard' }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var arrayOfSkills = this.props.dataStudent.skills;

      return _react2.default.createElement(
        'div',
        { className: 'student' },
        _react2.default.createElement(
          'div',
          { className: 'students__container' },
          _react2.default.createElement(
            'div',
            { className: 'student__divImg' },
            _react2.default.createElement('img', { className: 'student__img', src: this.props.dataStudent.avatar })
          ),
          _react2.default.createElement(
            'div',
            { className: 'student__info' },
            this.props.dataStudent.display_name === '' ? _react2.default.createElement(
              'div',
              { className: 'student__name' },
              this.props.dataStudent.username
            ) : _react2.default.createElement(
              'div',
              { className: 'student__name' },
              this.props.dataStudent.display_name
            ),
            _react2.default.createElement(
              'div',
              { className: 'student__job student__span' },
              'Full Stack Developer'
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'span',
                { className: 'student__span' },
                'Skills: '
              ),
              arrayOfSkills.map(function (skill, i) {
                if (i !== arrayOfSkills.length - 1) {
                  return skill + ', ';
                } else {
                  return '' + skill;
                }
              })
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'span',
                { className: 'student__span' },
                'Cohrot: '
              ),
              this.props.dataStudent.cohort
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'span',
                { className: 'student__span' },
                'Campus: '
              ),
              this.props.dataStudent.campus
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'span',
                { className: 'student__span' },
                'Interest: '
              ),
              this.props.dataStudent.interests
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'student__status' },
          _react2.default.createElement('div', { className: 'student__circle', title: this.props.dataStudent.status,
            style: this._handleCircleColor(this.props.dataStudent.status) }),
          _react2.default.createElement('input', { onClick: this.view, className: 'student__view', type: 'submit', value: 'View' })
        )
      );
    }
  }]);

  return Students;
}(_react.Component);

Students.propTypes = {
  dataStudent: _propTypes2.default.array,
  props: _propTypes2.default.obj

};

exports.default = Students;