/**
 * @description Custom error class with added http status
 */
class ApiError extends Error {
  status: number;

  constructor(
    status: number = 500,
    message: string = "Internal Server Error",
  ) {
    super(message);
    this.status = status;
  }
}

export default ApiError;