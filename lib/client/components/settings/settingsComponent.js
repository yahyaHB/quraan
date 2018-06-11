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

var _reactRouterDom = require('react-router-dom');

var _settingsData = require('../../actions/settingsData');

var updatedata = _interopRequireWildcard(_settingsData);

require('./style.css');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Settings = function (_Component) {
  _inherits(Settings, _Component);

  function Settings(props) {
    _classCallCheck(this, Settings);

    var _this = _possibleConstructorReturn(this, (Settings.__proto__ || Object.getPrototypeOf(Settings)).call(this, props));

    _this.state = { display_name: '', interests: '', skills: '', email: '', profile_url: '', expanded: false };
    _this.handleEditDispllayName = _this.handleEditDispllayName.bind(_this);
    _this.handleEditEmail = _this.handleEditEmail.bind(_this);
    _this.showCheckboxes = _this.showCheckboxes.bind(_this);
    _this.showCheckboxes2 = _this.showCheckboxes2.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(Settings, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.props.studentData.map(function (item) {
        _this2.setState({
          display_name: item.display_name, interests: item.interests,
          skills: item.skills, email: item.email,
          profile_url: item.profile_url });
      });
    }
  }, {
    key: 'handleEditDispllayName',
    value: function handleEditDispllayName(e) {
      var setting_input_btn = document.getElementById('setting_input_btn');
      var editIcon = document.getElementById('editIcon');
      var span = document.getElementById('span');
      var editInput = document.createElement('input');
      var key = setting_input_btn.className;
      if (e.target.id === 'edit') {
        editInput.id = 'saveinput';
        editInput.autofocus = true;
        editInput.value = span.textContent;
        setting_input_btn.insertBefore(editInput, span);
        span.classList.add('hidden');
        e.target.id = 'save';
        editIcon.className = 'fa fa-check iconStyle';
      } else {
        var input = document.getElementById('saveinput');
        input.autofocus = true;
        e.target.id = 'edit';
        editIcon.className = 'fa fa-pencil iconStyle';
        this.setState(_defineProperty({}, key, input.value));
        span.classList.remove('hidden');

        input.remove();
      }
    }
  }, {
    key: 'handleEditEmail',
    value: function handleEditEmail(e) {
      var setting_input_btn = document.getElementById('setting_input_btn2');
      var editIcon = document.getElementById('editIcon2');
      var span = document.getElementById('span2');
      var editInput = document.createElement('input');
      var key = setting_input_btn.className;
      if (e.target.id === 'edit') {
        editInput.id = 'saveinput';
        editInput.autofocus = true;
        editInput.value = span.textContent;
        setting_input_btn.insertBefore(editInput, span);
        span.classList.add('hidden');
        e.target.id = 'save';
        editIcon.className = 'fa fa-check iconStyle';
      } else {
        var input = document.getElementById('saveinput');
        input.autofocus = true;
        e.target.id = 'edit';
        editIcon.className = 'fa fa-pencil iconStyle';
        this.setState(_defineProperty({}, key, input.value));
        span.classList.remove('hidden');

        input.remove();
      }
    }
  }, {
    key: 'showCheckboxes',
    value: function showCheckboxes() {
      var checkboxes = document.getElementById('checkboxes');
      var editIcon = document.getElementById('editIconInterest');
      if (!this.state.expanded) {
        editIcon.className = 'fa fa-check iconStyle';
        checkboxes.style.display = 'block';
        this.setState({ expanded: true });
      } else {
        var checkbox = document.getElementsByName('interest');
        var arr = Array.prototype.slice.call(checkbox).filter(function (e) {
          return e.checked;
        });;
        var interesting = arr.map(function (e) {
          return e.value;
        });
        editIcon.className = 'fa fa-pencil iconStyle';
        checkboxes.style.display = 'none';
        this.setState({ expanded: false, interests: interesting });
      }
    }
  }, {
    key: 'showCheckboxes2',
    value: function showCheckboxes2() {
      var checkboxes = document.getElementById('checkboxes2');
      var editIcon = document.getElementById('editIconSkills');
      if (!this.state.expanded) {
        editIcon.className = 'fa fa-check iconStyle';
        checkboxes.style.display = 'block';
        this.setState({ expanded: true });
      } else {
        var checkbox = document.getElementsByName('skills');
        var arr = Array.prototype.slice.call(checkbox).filter(function (e) {
          return e.checked;
        });;
        var skills = arr.map(function (e) {
          return e.value;
        });
        editIcon.className = 'fa fa-pencil iconStyle';
        checkboxes.style.display = 'none';
        this.setState({ expanded: false, skills: skills });
      }
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit() {
      this.props.updatedata(this.state);
    }
  }, {
    key: 'render',
    value: function render() {
      var staticInterests = ['Freelancing', 'Mentoring', 'CFing', 'Contracts'];
      var staticSkills = ['React.js', 'Node.js', 'JavaScript', 'HTML', 'CSS', 'CSS3', 'HTML5', 'Express.js', 'PostgreSQL'];
      var interests = staticInterests.map(function (interest, i) {
        return _react2.default.createElement(
          'label',
          { key: i, htmlFor: interest },
          _react2.default.createElement('input', { name: 'interest', type: 'checkbox', id: interest, value: interest }),
          interest
        );
      });
      var skills = staticSkills.map(function (skill, i) {
        return _react2.default.createElement(
          'label',
          { key: i, htmlFor: skill },
          _react2.default.createElement('input', { name: 'skills', type: 'checkbox', id: skill, value: skill }),
          skill
        );
      });

      return this.props.update.success.ok ? _react2.default.createElement(_reactRouterDom.Redirect, {
        to: { pathname: '/profile/' + this.props.studentData[0].username }
      }) : _react2.default.createElement(
        'div',
        { id: 'setting', className: 'setting' },
        _react2.default.createElement(
          'div',
          { className: 'setting__nav' },
          _react2.default.createElement('img', { src: './assets/logo.png' }),
          _react2.default.createElement(
            'h1',
            null,
            'Founders & Coders'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'setting__container' },
          _react2.default.createElement(
            'h1',
            null,
            'Edit your Profile'
          ),
          _react2.default.createElement(
            'div',
            { className: 'big__container' },
            _react2.default.createElement(
              'div',
              { className: 'container__left' },
              _react2.default.createElement(
                'div',
                { className: 'setting_names' },
                _react2.default.createElement(
                  'div',
                  null,
                  'Display name / '
                ),
                _react2.default.createElement(
                  'div',
                  null,
                  'Interests / '
                ),
                _react2.default.createElement(
                  'div',
                  null,
                  'Skills / '
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'setting_names' },
                _react2.default.createElement(
                  'div',
                  { id: 'setting_input_btn', className: 'display_name' },
                  _react2.default.createElement(
                    'span',
                    { id: 'span' },
                    this.state.display_name
                  ),
                  _react2.default.createElement(
                    'button',
                    { id: 'edit', className: 'setting_edit', onClick: this.handleEditDispllayName },
                    _react2.default.createElement('i', { id: 'editIcon', className: 'fa fa-pencil iconStyle' })
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { id: 'setting_input_btn1', className: 'display_name' },
                  _react2.default.createElement(
                    'span',
                    { id: 'span' },
                    'My interests'
                  ),
                  _react2.default.createElement(
                    'button',
                    { id: 'edit', className: 'setting_edit', onClick: this.showCheckboxes },
                    _react2.default.createElement('i', { id: 'editIconInterest', className: 'fa fa-pencil iconStyle' })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'setting_multiselect' },
                    _react2.default.createElement(
                      'div',
                      { className: 'setting_checkboxes', id: 'checkboxes' },
                      interests
                    )
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { id: 'setting_input_btn1', className: 'display_name' },
                  _react2.default.createElement(
                    'span',
                    { id: 'span' },
                    'My skills'
                  ),
                  _react2.default.createElement(
                    'button',
                    { id: 'edit', className: 'setting_edit', onClick: this.showCheckboxes2 },
                    _react2.default.createElement('i', { id: 'editIconSkills', className: 'fa fa-pencil iconStyle' })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'setting_multiselect' },
                    _react2.default.createElement(
                      'div',
                      { className: 'setting_checkboxes', id: 'checkboxes2' },
                      skills
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'container__right' },
              _react2.default.createElement(
                'div',
                { id: 'setting_input_btn2', className: 'email' },
                this.state.email !== '' ? _react2.default.createElement(
                  'span',
                  { id: 'span2' },
                  this.state.email
                ) : _react2.default.createElement(
                  'span',
                  { id: 'span2' },
                  'You don\\t have email yet'
                ),
                _react2.default.createElement(
                  'button',
                  { id: 'edit', className: 'setting_edit', onClick: this.handleEditEmail },
                  _react2.default.createElement('i', { id: 'editIcon2', className: 'fa fa-pencil iconStyle' })
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'social__links__setting' },
                _react2.default.createElement(
                  'h3',
                  null,
                  'Social Links '
                ),
                _react2.default.createElement('img', { src: './assets/plus.png' })
              ),
              _react2.default.createElement('input', { id: 'profile_url', className: 'setting__input github__URL',
                type: 'url', placeholder: this.state.profile_url }),
              _react2.default.createElement('input', { id: 'social_links', className: 'setting__input', type: 'url' })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'setting__btn__div' },
            _react2.default.createElement('input', { type: 'submit', value: 'Save',
              className: 'settings__save__btn', onClick: this.handleSubmit })
          )
        ),
        _react2.default.createElement('div', null)
      );
    }
  }]);

  return Settings;
}(_react.Component);

Settings.propTypes = {
  studentData: _propTypes2.default.array,
  updatedata: _propTypes2.default.fun,
  update: _propTypes2.default.obj };

var mapStateToProps = function mapStateToProps(state) {
  return {
    update: state.updatedata
  };
};
var mapDispatchToProps = {
  updatedata: updatedata.UpdateDataUser
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Settings);