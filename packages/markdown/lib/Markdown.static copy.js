"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MarkdownStatic;

var _react = _interopRequireDefault(require("react"));

var _static = require("@codeblock/react/static");

var _Markdown = _interopRequireDefault(require("./Markdown"));

var _props = require("./props");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

MarkdownStatic.propTypes = _props.propTypes;
MarkdownStatic.defaultProps = _props.defaultProps;

function MarkdownStatic(props) {
  return _react["default"].createElement(_Markdown["default"], _extends({
    codeblockProviders: _static.staticProviders
  }, props));
}