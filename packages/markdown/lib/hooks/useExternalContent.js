"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useExternalContent;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function useExternalContent(url, loadExternal) {
  var _React$useState = _react.default.useState(''),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      content = _React$useState2[0],
      setContent = _React$useState2[1];

  _react.default.useEffect(function () {
    return loadExternal(url, function (error, result) {
      if (!error) {
        setContent(result);
      } else if (error.name !== 'AbortError') {
        console.warn('[codeblock] useExternalContent failed', url);
      }
    });
  }, [url]);

  return content;
}