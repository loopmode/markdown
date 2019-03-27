"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useContent;

var _useExternalContent = _interopRequireDefault(require("./useExternalContent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function useContent(children, src, loadExternal) {
  if (src) {
    return (0, _useExternalContent.default)(src, loadExternal);
  }

  return children;
}