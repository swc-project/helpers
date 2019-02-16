const arrayWithHoles = require('./_array_with_holes');
const iterableToArrayLimitLoose = require('./_iterable_to_array_limit_loose');
const nonIterableRest = require('./_non_iterable_rest');

export default function _slicedToArrayLoose(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimitLoose(arr, i) || nonIterableRest();
}
