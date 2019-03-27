"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Markdown;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactRemarkable = _interopRequireDefault(require("react-remarkable"));

var _usePrism = _interopRequireDefault(require("@loopmode/codeblock/lib/hooks/usePrism"));

var _useContent = _interopRequireDefault(require("./hooks/useContent"));

var _fetchExternal = _interopRequireDefault(require("./utils/fetchExternal"));

var _Markdown = _interopRequireDefault(require("./Markdown.styled"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

Markdown.propTypes = {
  children: _propTypes.default.string,
  className: _propTypes.default.string,
  prismTheme: _propTypes.default.string,
  loadExternal: _propTypes.default.func,
  src: _propTypes.default.string
};
Markdown.defaultProps = {
  loadExternal: _fetchExternal.default
};

function Markdown(_ref) {
  var children = _ref.children,
      src = _ref.src,
      loadExternal = _ref.loadExternal,
      className = _ref.className,
      _ref$prismTheme = _ref.prismTheme,
      theme = _ref$prismTheme === void 0 ? 'prism' : _ref$prismTheme,
      props = _objectWithoutProperties(_ref, ["children", "src", "loadExternal", "className", "prismTheme"]);

  var ref = _react.default.useRef(null);

  (0, _usePrism.default)(ref, {
    theme: theme,
    isContainer: true
  });
  return _react.default.createElement(_Markdown.default, {
    className: (0, _classnames.default)('Markdown', className),
    ref: ref
  }, _react.default.createElement(_reactRemarkable.default, _extends({}, props, {
    children: (0, _useContent.default)(children, src, loadExternal)
  })));
}