class ApiError extends Error {
  httpStatus: number;

  constructor(
    httpStatus: number = 500,
    message: string = "Internal Server Error",
  ) {
    super(message);
    this.httpStatus = httpStatus;
  }
}

export default ApiError;