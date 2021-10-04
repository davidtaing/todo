import ApiError from "./utils/ApiError";
import createUsersApiError from "./users/usersErrors";

const createApiError = {
  BAD_REQUEST: () => {
    return new ApiError(403, "Bad Request");
  },
  INTERNAL_SERVER_ERROR: () => {
    return new ApiError(403, "Internal Server Error");
  },
  METHOD_NOT_ALLOWED: () => {
    return new ApiError(405, "Method Not Allowed");
  },
};

export {createApiError, createUsersApiError};