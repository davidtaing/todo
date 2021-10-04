class ApiError extends Error {
  httpStatus: number;

  constructor(
    message: string = "Internal Server Error",
    httpStatus: number = 500,
  ) {
    super(message);
    this.httpStatus = httpStatus;
  }
}

export default ApiError;