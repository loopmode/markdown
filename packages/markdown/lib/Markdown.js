"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Markdown;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _usePrism = _interopRequireDefault(require("@loopmode/codeblock/lib/hooks/usePrism"));

var _useContent = _interopRequireDefault(require("./hooks/useContent"));

var _useRemarkable = _interopRequireDefault(require("./hooks/useRemarkable"));

var _fetchExternal = _interopRequireDefault(require("./utils/fetchExternal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    table {\n        display: block;\n        overflow-x: auto;\n        white-space: nowrap;\n    }\n    table td,\n    table th {\n        padding: 5px;\n        border-bottom: 1px solid #eee;\n    }\n    table thead th {\n        border-bottom: 1px solid #ccc;\n    }\n\n    &.boxed {\n        padding: 20px;\n        border: 1px solid #e0e0e0;\n        border-radius: 3px;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

Markdown.propTypes = {
  children: _propTypes.default.string,
  className: _propTypes.default.string,
  loadExternal: _propTypes.default.func,
  src: _propTypes.default.string,
  boxed: _propTypes.default.bool,
  prismTheme: _propTypes.default.string,
  remarkableOptions: _propTypes.default.object
};
Markdown.defaultProps = {
  loadExternal: _fetchExternal.default,
  prismTheme: 'prism',
  remarkableOptions: {}
};
Markdown.Styled = _styledComponents.default.div(_templateObject());

function Markdown(_ref) {
  var children = _ref.children,
      src = _ref.src,
      loadExternal = _ref.loadExternal,
      className = _ref.className,
      boxed = _ref.boxed,
      prismTheme = _ref.prismTheme,
      remarkableOptions = _ref.remarkableOptions,
      props = _objectWithoutProperties(_ref, ["children", "src", "loadExternal", "className", "boxed", "prismTheme", "remarkableOptions"]);

  var ref = _react.default.useRef(null);

  var content = (0, _useContent.default)(children, src, loadExternal);
  var html = (0, _useRemarkable.default)(content, remarkableOptions);
  (0, _usePrism.default)(ref, {
    theme: prismTheme,
    isContainer: true
  });
  return _react.default.createElement(Markdown.Styled, _extends({}, props, {
    ref: ref,
    className: (0, _classnames.default)('Markdown', className, {
      boxed: boxed
    }),
    dangerouslySetInnerHTML: {
      __html: html
    }
  }));
}