const arrayWithHoles = require('./_array_with_holes');
const iterableToArrayLimit = require('./_iterable_to_array');
const nonIterableRest = require('./_non_iterable_rest');

export default function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}