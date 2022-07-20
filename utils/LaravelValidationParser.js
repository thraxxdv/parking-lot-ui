// @flow

const LaravelValidationParser = (errorBag: Object = {}): Array<string> => {
  let bag = [];

  Object.keys(errorBag).map((obj) => {
    errorBag[obj].forEach((msg) => {
      bag.push(msg);
    });
  });

  return bag;
};

export default LaravelValidationParser;
