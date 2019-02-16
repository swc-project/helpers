const assertThisInitialized = require('./_assert_this_initialized');
const _typeof = require('./_type_of');

export default function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}
