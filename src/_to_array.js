const arrayWithHoles = require('./_array_with_holes');
const iterableToArray = require('./_iterable_to_array');
const nonIterableRest = require('./_non_iterable_rest');

export default function _toArray(arr) {
  return arrayWithHoles(arr) || iterableToArray(arr) || nonIterableRest();
}
