"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useRemarkable;

var _react = _interopRequireDefault(require("react"));

var _remarkable = _interopRequireDefault(require("remarkable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function useRemarkable(source) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var renderer = _react.default.useMemo(function () {
    return new _remarkable.default(options);
  }, Object.values(options));

  var result = _react.default.useMemo(function () {
    return renderer.render(source);
  }, [renderer, source]);

  return result;
}