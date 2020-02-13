"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MarkdownHTTP;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@codeblock/core");

var _empty = _interopRequireDefault(require("@codeblock/languages/lib/empty"));

var _createHttpProvider = require("@codeblock/themes/lib/utils/create-http-provider");

var _Markdown = _interopRequireDefault(require("./Markdown"));

var _props = require("./props");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

MarkdownHTTP.propTypes = _objectSpread({
  prismPath: _propTypes["default"].string.isRequired
}, _props.propTypes);
MarkdownHTTP.defaultProps = _props.defaultProps;

function MarkdownHTTP(props) {
  _react["default"].useEffect(function () {
    (0, _core.setAutoload)(props.prismPath);
  }, [props.prismPath]);

  var httpProviders = _react["default"].useMemo(function () {
    return {
      languages: _empty["default"],
      themes: (0, _createHttpProvider.createHttpThemeProvider)(props.prismPath)
    };
  }, [props.prismPath]);

  return _react["default"].createElement(_Markdown["default"], _extends({}, props, {
    codeblockProviders: httpProviders
  }));
}