"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Markdown;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _useContent = _interopRequireDefault(require("@loopmode/use-content"));

var _useRemarkable = _interopRequireDefault(require("./hooks/useRemarkable"));

var _props = require("./props");

var _hooks = require("@codeblock/react/lib/hooks");

var _core = require("@codeblock/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    table {\n        display: block;\n        overflow-x: auto;\n        white-space: nowrap;\n    }\n    table td,\n    table th {\n        padding: 5px;\n        border-bottom: 1px solid #eee;\n    }\n    table thead th {\n        border-bottom: 1px solid #ccc;\n    }\n\n    &.boxed {\n        padding: 20px;\n        border: 1px solid #e0e0e0;\n        border-radius: 3px;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

Markdown.Styled = _styledComponents["default"].div(_templateObject());
Markdown.propTypes = _props.propTypes;
Markdown.defaultProps = _props.defaultProps;

function Markdown(props) {
  // const ref = React.useRef(null);
  var content = (0, _useContent["default"])(props.children, props);
  var html = (0, _useRemarkable["default"])(content, props.remarkableOptions);

  _react["default"].useEffect(function () {
    (0, _core.setAutoload)(null);
  }, []);

  var _useCodeblock = (0, _hooks.useCodeblock)({
    providers: props.codeblockProviders,
    theme: props.prismTheme
  }),
      applyCodeblock = _useCodeblock.applyCodeblock;

  return _react["default"].createElement(Markdown.Styled, _extends({}, getForeignProps(props), {
    ref: applyCodeblock,
    key: html,
    className: (0, _classnames["default"])('Markdown', props.className, (0, _core.getThemeClassName)(props.prismTheme), {
      boxed: props.boxed
    }),
    dangerouslySetInnerHTML: {
      __html: html
    }
  }));
}

function getForeignProps(props) {
  var ownKeys = Object.keys(Markdown.defaultProps);
  return Object.entries(props).reduce(function (result, _ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    if (ownKeys.includes(key)) {
      return result;
    }

    return Object.assign(result, _defineProperty({}, key, value));
  }, {});
}