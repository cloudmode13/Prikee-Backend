export const errorHandler = (statusCode, message) => {
  const error = new Error();
  error.statusCode = statusCode;
  error.message = message;
  return error;
};

export const errorHandlerMiddleware = (error, req, res, next) => {
  const statusCode = error.statusCode || 500;
  const errorMessage = error.message || 'Internal Server Error';
  res.status(statusCode).json({ error: errorMessage });
};
