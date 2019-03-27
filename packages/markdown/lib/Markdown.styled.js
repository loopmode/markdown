"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    img {\n        background: #eee;\n    }\n    table {\n        display: block;\n        overflow-x: auto;\n        white-space: nowrap;\n    }\n    table td,\n    table th {\n        padding: 5px;\n        border-bottom: 1px solid #eee;\n    }\n    table thead th {\n        border-bottom: 1px solid #ccc;\n    }\n\n    &.boxed > div {\n        padding: 20px;\n        border: 1px solid #e0e0e0;\n        border-radius: 3px;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _default = _styledComponents.default.div(_templateObject());

exports.default = _default;