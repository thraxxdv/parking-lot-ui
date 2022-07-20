// @flow
const HttpErrorHandler = (axiosError: Object, validationCallback: Function) => {
  if ((axiosError.response.status = 422)) {
    validationCallback();
  } else {
    alert(axiosError.response.message);
  }
};

export default HttpErrorHandler;
