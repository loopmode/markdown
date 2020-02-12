"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MarkdownHTTP;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Markdown = _interopRequireDefault(require("./Markdown"));

var _props = require("./props");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

MarkdownHTTP.propTypes = _objectSpread({
  prismPath: _propTypes.default.string.isRequired
}, _props.propTypes);
MarkdownHTTP.defaultProps = _props.defaultProps;

function MarkdownHTTP(props) {
  return _react.default.createElement(_Markdown.default, props);
}