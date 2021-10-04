import ApiError from "../utils/ApiError";

const createUsersApiError = {
  PASSWORDS_DO_NOT_MATCH: () => {
    return new ApiError(403, "Password and Confirm Password do not match");
  },
};

export default createUsersApiError;