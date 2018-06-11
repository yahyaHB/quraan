'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDropzone = require('react-dropzone');

var _reactDropzone2 = _interopRequireDefault(_reactDropzone);

var _sha = require('sha1');

var _sha2 = _interopRequireDefault(_sha);

var _superagent = require('superagent');

var _superagent2 = _interopRequireDefault(_superagent);

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

var Q6 = function (_Component) {
  _inherits(Q6, _Component);

  function Q6(props) {
    _classCallCheck(this, Q6);

    var _this = _possibleConstructorReturn(this, (Q6.__proto__ || Object.getPrototypeOf(Q6)).call(this, props));

    _this.state = {
      project1: {
        name: '',
        link: ''
      },
      project2: {
        name: '',
        link: ''
      }
    };
    _this.handleLinks = _this.handleLinks.bind(_this);
    _this.handlePortfolio = _this.handlePortfolio.bind(_this);
    _this.save = _this.save.bind(_this);
    return _this;
  }

  _createClass(Q6, [{
    key: 'handleLinks',
    value: function handleLinks(ev) {
      var state2 = this.state;
      if (ev.target.name === 'name1') {
        this.setState({
          project1: _extends({}, state2.project1, { name: ev.target.value })
        });
      }
      if (ev.target.name === 'project1') {
        this.setState({
          project1: _extends({}, state2.project1, { link: ev.target.value })
        });
      }
      if (ev.target.name === 'name2') {
        this.setState({
          project2: _extends({}, state2.project2, { name: ev.target.value })
        });
      }
      if (ev.target.name === 'project2') {
        this.setState({
          project2: _extends({}, state2.project2, { link: ev.target.value })
        });
      }
    }
  }, {
    key: 'save',
    value: function save() {
      this.props.storeAnswer({ name: 'projects', value: this.state });
    }
  }, {
    key: 'handlePortfolio',
    value: function handlePortfolio(ev) {
      var portfolio = ev.target.value;
      this.props.storeAnswer({ name: 'portfolio', value: portfolio });
    }
  }, {
    key: 'uploadFile',
    value: function uploadFile(files) {
      var _this2 = this;

      var file = files[0];
      var cloudName = 'drgrbu6fw';
      var url = 'https://api.cloudinary.com/v1_1/' + cloudName + '/image/upload';
      var timestamp = Date.now() / 1000;
      var uploadPreset = 'wnb3avvf';
      var paramsStr = 'timestamp=' + timestamp + '&upload_preset=' + uploadPreset + 'Fe4eNIyg_ZlUTQ2q2zdGbsebjAw';
      var signature = (0, _sha2.default)(paramsStr);
      var params = {
        api_key: '722744556869565',
        timestamp: timestamp,
        upload_preset: uploadPreset,
        signature: signature
      };
      var uploadRequest = _superagent2.default.post(url);
      uploadRequest.attach('file', file);

      Object.keys(params).forEach(function (key) {
        uploadRequest.field(key, params[key]);
      });
      uploadRequest.end(function (err, res) {
        if (err) {
          alert(err);

          return;
        }
        var uploaded = res.body.url;
        _this2.setState({
          files: 'success uploading one file ' + res.body.original_filename,
          filename: uploaded
        });
        _this2.props.storeAnswer({ name: 'cv', value: uploaded });
      });
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        { className: 'question__container' },
        _react2.default.createElement(
          'div',
          { className: 'q__container' },
          _react2.default.createElement(
            'h1',
            null,
            'Upload your (Projects links, C.V., Portfolio) '
          ),
          _react2.default.createElement(
            'div',
            { className: 'q6__container' },
            _react2.default.createElement(
              'div',
              { className: 'q6_links' },
              _react2.default.createElement(
                'h3',
                { className: 'q6__h3' },
                ' Project links '
              ),
              _react2.default.createElement(
                'h3',
                { className: 'q6_p__h3' },
                '(Portfolio)'
              ),
              _react2.default.createElement(
                'h3',
                null,
                'CV.'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'q6_input' },
              _react2.default.createElement('input', { type: 'text', name: 'name1', placeholder: 'Project1 Title', onChange: this.handleLinks, onKeyUp: this.save }),
              _react2.default.createElement('input', { type: 'text', name: 'name2', className: 'projects_container_name2', placeholder: 'Project2 Title', onChange: this.handleLinks, onKeyUp: this.save })
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'div',
                { className: 'q6_input' },
                _react2.default.createElement('input', { type: 'text', name: 'project1', placeholder: 'Link your project 1', onChange: this.handleLinks, onKeyUp: this.save }),
                _react2.default.createElement('input', { type: 'text', name: 'project2', placeholder: 'Link your project 2', onChange: this.handleLinks, onKeyUp: this.save }),
                _react2.default.createElement('input', { type: 'text', className: 'q6_input_portfolio', placeholder: 'Link your portfolio', onChange: this.handlePortfolio })
              ),
              _react2.default.createElement(
                _reactDropzone2.default,
                { onDrop: this.uploadFile.bind(this),
                  className: 'Dropzone' },
                _react2.default.createElement(
                  'h3',
                  { className: 'q6_input__h3' },
                  'Upload CV.',
                  _react2.default.createElement('i', { className: 'fa fa-upload' })
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          'h3',
          { style: { marginTop: '225px', marginRight: '-31px',
              color: 'lawngreen' } },
          this.state.files
        ),
        _react2.default.createElement(
          'div',
          { className: 'buttons' },
          _react2.default.createElement(_backBtn2.default, { prevQuestion: 'Q5' }),
          _react2.default.createElement(_nextBtn2.default, { classname: 'q6error', nextQuestion: 'End' })
        )
      );
    }
  }]);

  return Q6;
}(_react.Component);

Q6.propTypes = {
  storeAnswer: _propTypes2.default.func
};
var mapDispatchToProps = {
  storeAnswer: storeAnswer.compilationOfAnswers

};

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(Q6);