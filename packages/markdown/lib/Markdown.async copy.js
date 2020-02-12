"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MarkdownAsync;

var _react = _interopRequireDefault(require("react"));

var _async = require("@codeblock/react/async");

var _Markdown = _interopRequireDefault(require("./Markdown"));

var _props = require("./props");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

MarkdownAsync.propTypes = _props.propTypes;
MarkdownAsync.defaultProps = _props.defaultProps;

function MarkdownAsync(props) {
  return _react.default.createElement(_Markdown.default, _extends({
    codeblockProviders: _async.asyncProviders
  }, props));
}