// @flow

const LaravelValidationParser = (errorBag: Object): Array<string> => {
  return Object.keys(errorBag).map((obj) => errorBag[obj].map((msg) => msg));
};

export default LaravelValidationParser;
