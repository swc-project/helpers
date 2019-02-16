const arrayWithoutHoles = require('./_array_without_holes');
const iterableToArray = require('./_iterable_to_array');
const nonIterableSpread = require('./_non_iterable_spread');

export default function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}
