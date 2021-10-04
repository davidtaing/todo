const httpErrorCodes = {
  BAD_REQUEST: { status: 400, message: "Bad Request" },
  METHOD_NOT_ALLOWED: { status: 405, message: "Method Not Allowed" },
  INTERNAL_SERVER_ERROR: { status: 500, message: "Internal Server Error" },
};

export default httpErrorCodes;