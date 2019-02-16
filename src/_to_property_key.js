const _typeof = require('./_type_of');
const toPrimitive = require('./_to_primitive');

export default function _toPropertyKey(arg) {
  var key = toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}