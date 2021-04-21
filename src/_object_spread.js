import defineProperty from './_define_property';

export default function _objectSpread(target) {
  const vargs = arguments;
  for (var i = 1; i < vargs.length; i++) {
    var source = vargs[i] != null ? vargs[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(
        Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        })
      );
    }

    ownKeys.forEach(function (key) {
      defineProperty(target, key, source[key]);
    });
  }

  return target;
}