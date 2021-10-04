const usersErrorCodes = {
  PASSWORDS_DO_NOT_MATCH: {
    status: 403,
    message: "Password and Confirm Password do not match",
  },
  UNAUTHORIZED_INVALID_EMAIL_OR_PASSWORD: {
    status: 401,
    message: "Unauthorized: Invalid Email or Password.",
  },
};

export default usersErrorCodes;
