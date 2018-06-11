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

var Q3 = function (_Component) {
  _inherits(Q3, _Component);

  function Q3() {
    _classCallCheck(this, Q3);

    var _this = _possibleConstructorReturn(this, (Q3.__proto__ || Object.getPrototypeOf(Q3)).call(this));

    _this.state = {
      skills: ['React.js', 'Node.js', 'JavaScript', 'HTML', 'CSS', 'CSS3', 'HTML5', 'Express.js', 'PostgreSQL'],
      mySkills: [],
      message: ''
    };
    _this.tech = _this.tech.bind(_this);
    _this.getSkills = _this.getSkills.bind(_this);
    _this.removeSkill = _this.removeSkill.bind(_this);

    return _this;
  }

  _createClass(Q3, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.storeAnswer({ name: 'skills', value: this.state.mySkills });
    }
  }, {
    key: 'tech',
    value: function tech(ev) {
      var datalist = document.getElementById('techList');
      var techs = ev.target.value.toUpperCase();
      var sameSkills = this.state.skills.filter(function (skill) {
        return skill.startsWith(techs);
      });
      var childArray = datalist.children;
      var cL = childArray.length;
      while (cL > 0) {
        cL--;
        datalist.removeChild(childArray[cL]);
      }
      sameSkills.map(function (sameSkill) {
        var option = document.createElement('option');
        option.setAttribute('value', sameSkill);
        datalist.appendChild(option);
      });
    }
  }, {
    key: 'getSkills',
    value: function getSkills(ev) {
      ev.preventDefault();
      var techValue = ev.target[0].value;
      if (!this.state.skills.includes(techValue)) {
        this.setState({ message: 'Sorry this skill is not available' });
        ev.target[0].value = '';
      } else {
        this.setState({ message: '' });

        if (!this.state.mySkills.includes(techValue) && this.state.mySkills.length !== 5) {
          this.state.mySkills.push(techValue);
          this.props.storeAnswer({ name: 'skills', value: this.state.mySkills });
          ev.target[0].value = '';
        } else {

          this.setState({ message: 'Delete one to choose another skill' });
        }
      }
    }
  }, {
    key: 'removeSkill',
    value: function removeSkill(ev) {
      var skillname = ev.target.id;
      var Skills = this.state.mySkills.filter(function (skills) {
        return skills !== skillname;
      });
      this.setState({ mySkills: Skills });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'question__container' },
        _react2.default.createElement(
          'div',
          { className: 'q__container' },
          _react2.default.createElement(
            'h1',
            null,
            'Tell us your top 5 tech skills'
          ),
          _react2.default.createElement(
            'form',
            { onSubmit: this.getSkills },
            _react2.default.createElement('input', { className: 'q3__input', type: 'text', placeholder: 'Skill (ex: HTML)',
              list: 'techList', onInput: this.tech }),
            _react2.default.createElement('datalist', { id: 'techList' })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'myskills_container' },
          _react2.default.createElement(
            'ul',
            { className: 'mySkills_list' },
            this.state.mySkills.length !== 0 ? this.state.mySkills.map(function (skill, index) {
              return _react2.default.createElement(
                'li',
                { className: 'mySkill', key: index },
                skill,
                _react2.default.createElement('i', { id: skill, onClick: _this2.removeSkill, className: 'fa fa-remove',
                  style: { color: 'red', position: 'absolute', left: '82px', top: '2px' } })
              );
            }) : _react2.default.createElement('div', null)
          )
        ),
        _react2.default.createElement(
          'h3',
          { style: { color: 'red' } },
          this.state.message
        ),
        _react2.default.createElement(
          'div',
          { className: 'buttons' },
          _react2.default.createElement(_backBtn2.default, { prevQuestion: 'Q2' }),
          _react2.default.createElement(_nextBtn2.default, { nextQuestion: 'Q4' })
        )
      );
    }
  }]);

  return Q3;
}(_react.Component);

Q3.propTypes = {
  storeAnswer: _propTypes2.default.func
};
var mapDispatchToProps = {
  storeAnswer: storeAnswer.compilationOfAnswers

};

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(Q3);