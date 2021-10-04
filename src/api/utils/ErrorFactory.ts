import ApiError from "./ApiError";

const ErrorFactory = (errorCodes: any): ApiError => {
  return new ApiError(errorCodes.status, errorCodes.message);
};

export default ErrorFactory;