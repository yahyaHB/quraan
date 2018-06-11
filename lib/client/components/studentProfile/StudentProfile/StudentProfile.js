'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./StudentProfile.css');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Profile = function (_Component) {
  _inherits(Profile, _Component);

  function Profile(props) {
    _classCallCheck(this, Profile);

    var _this = _possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).call(this, props));

    _this.handleUrl = _this.handleUrl.bind(_this);

    return _this;
  }

  _createClass(Profile, [{
    key: 'handleUrl',
    value: function handleUrl(url) {
      if (url.includes === 'https://') {
        return url;
      } else {
        return 'https://' + url;
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
          { className: 'wholeStudentContainers', key: item.id },
          _react2.default.createElement(
            'div',
            { className: 'studentProfile' },
            _react2.default.createElement(
              'div',
              { className: 'studentContainer' },
              _react2.default.createElement(
                'div',
                { className: 'studentContainer__container' },
                _react2.default.createElement(
                  'div',
                  { className: 'studentImg' },
                  _react2.default.createElement('img', { src: item.avatar, alt: '' })
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'studentInfo' },
                  _react2.default.createElement(
                    'h1',
                    { className: 'studentName' },
                    item.display_name
                  ),
                  _react2.default.createElement(
                    'span',
                    { style: { paddingLeft: '10px', color: '#4d4b4b', fontSize: '18px' } },
                    '(',
                    item.username,
                    ')'
                  ),
                  _react2.default.createElement(
                    'p',
                    { className: 'studentLocation' },
                    _react2.default.createElement('i', { className: 'fas fa-map-marker-alt dropbtn' }),
                    item.campus
                  ),
                  _react2.default.createElement(
                    'p',
                    { className: 'studentCohort' },
                    item.cohort
                  ),
                  _react2.default.createElement(
                    'p',
                    { className: 'studentTitle' },
                    'Full Stack developer'
                  ),
                  _react2.default.createElement('a', { href: 'https://github.com/' + item.username, target: '__blank', className: 'fab fa-github githubbtn' }),
                  _react2.default.createElement('a', { href: 'https://www.linkedin.com/', target: '__blank', className: 'fab fa-linkedin inbtn' })
                )
              ),
              _this2.props.coming === 'AdminDashboard' ? _react2.default.createElement(
                'div',
                { className: 'studentContactInfo' },
                _react2.default.createElement(
                  'div',
                  { className: 'studentState' },
                  item.status
                ),
                _react2.default.createElement(
                  'a',
                  { className: 'studentGitter__a', href: 'https://gitter.im/' + item.username, target: '__blank' },
                  _react2.default.createElement(
                    'div',
                    { className: 'studentGitter' },
                    _react2.default.createElement('img', { className: 'studentGitter__img', src: '/assets/gittericon.png' }),
                    _react2.default.createElement(
                      'span',
                      { className: 'studentGitter__span' },
                      'Messege on Gitter'
                    )
                  )
                )
              ) : _react2.default.createElement(
                'div',
                { className: 'studentContactInfo' },
                _react2.default.createElement(
                  'div',
                  { className: 'studentState' },
                  item.status
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'studentSkills' },
              _react2.default.createElement(
                'div',
                { className: 'studentStdHeader' },
                _react2.default.createElement(
                  'h1',
                  { className: 'portfolio' },
                  'Skills:'
                )
              ),
              _react2.default.createElement(
                'ul',
                { className: 'studentSkillsList' },
                item.skills.map(function (skill, index) {
                  return _react2.default.createElement(
                    'li',
                    { className: 'studentSingleSkills', key: index },
                    _react2.default.createElement(
                      'a',
                      null,
                      skill
                    )
                  );
                })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'studentSkills' },
              _react2.default.createElement(
                'div',
                { className: 'studentStdHeader' },
                _react2.default.createElement(
                  'h1',
                  { className: 'portfolio' },
                  'Interests:'
                )
              ),
              _react2.default.createElement(
                'ul',
                { className: 'studentSkillsList' },
                item.interests.map(function (e, index) {
                  return _react2.default.createElement(
                    'li',
                    { className: 'studentSingleSkills', key: index },
                    _react2.default.createElement(
                      'a',
                      null,
                      e
                    )
                  );
                })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'studentSkills' },
              _react2.default.createElement(
                'div',
                { className: 'studentStdHeader' },
                _react2.default.createElement(
                  'h1',
                  { className: 'portfolio' },
                  'Portolio:'
                ),
                _react2.default.createElement('i', { className: 'fas fa-plus-circle addbtn' })
              ),
              _react2.default.createElement(
                'ul',
                { className: 'studentSkillsList' },
                _react2.default.createElement(
                  'li',
                  { className: 'studentSingleSkills' },
                  _react2.default.createElement(
                    'a',
                    null,
                    item.portfolio
                  )
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'studentSkills' },
              _react2.default.createElement(
                'div',
                { className: 'studentStdHeader' },
                _react2.default.createElement(
                  'h1',
                  { className: 'portfolio' },
                  'Projects Links:'
                ),
                _react2.default.createElement('i', { className: 'fas fa-plus-circle addbtn' })
              ),
              _react2.default.createElement(
                'ul',
                { className: 'studentSkillsList' },
                item.projects.map(function (project, i) {
                  return i % 2 === 0 ? _react2.default.createElement(
                    'li',
                    { className: 'studentSingleSkills studentSingleSkills_li' },
                    _react2.default.createElement(
                      'a',
                      { className: 'studentSingleSkills_a', href: _this2.handleUrl(item.projects[i + 1]),
                        target: '_blank' },
                      item.projects[i]
                    )
                  ) : _react2.default.createElement('li', null);
                })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'studentSkills' },
              _react2.default.createElement(
                'div',
                { className: 'studentStdHeader' },
                _react2.default.createElement(
                  'h1',
                  { className: 'portfolio' },
                  'C.V.:'
                ),
                _react2.default.createElement('i', { className: 'fas fa-plus-circle addbtn' })
              ),
              _react2.default.createElement(
                'ul',
                { className: 'studentSkillsList' },
                _react2.default.createElement(
                  'li',
                  { className: 'studentSingleSkills studentSingleSkills_li' },
                  _react2.default.createElement(
                    'a',
                    { className: 'studentSingleSkills_a', target: 'blank', href: item.cv },
                    'CV.'
                  )
                )
              )
            )
          )
        );
      });

      return _react2.default.createElement(
        'div',
        { className: 'studenProfileStyle' },
        arr
      );
    }
  }]);

  return Profile;
}(_react.Component);

Profile.propTypes = {
  studentData: _propTypes2.default.array,
  filter: _propTypes2.default.func,
  coming: _propTypes2.default.str
};

exports.default = Profile;