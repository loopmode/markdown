"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = exports.propTypes = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _empty = require("@codeblock/react/empty");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var propTypes = {
  children: _propTypes["default"].string,
  className: _propTypes["default"].string,
  loader: _propTypes["default"].func,
  src: _propTypes["default"].string,
  as: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func]),
  boxed: _propTypes["default"].bool,
  prismPath: _propTypes["default"].string,
  prismTheme: _propTypes["default"].string,
  codeblockProviders: _propTypes["default"].object,
  remarkableOptions: _propTypes["default"].object
};
exports.propTypes = propTypes;
var defaultProps = {
  children: undefined,
  loader: undefined,
  src: undefined,
  boxed: undefined,
  remarkableOptions: undefined,
  prismTheme: 'prism',
  codeblockProviders: _empty.emptyProviders
};
exports.defaultProps = defaultProps;