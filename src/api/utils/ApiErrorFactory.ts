import ApiError from "./ApiError";

/**
 * @description Creates an ApiError from the error codes specified as args.
 * @param errorCodes
 * @returns ApiError
 */
const ApiErrorFactory = (errorCodes: any): ApiError => {
  return new ApiError(errorCodes.status, errorCodes.message);
};

export default ApiErrorFactory;