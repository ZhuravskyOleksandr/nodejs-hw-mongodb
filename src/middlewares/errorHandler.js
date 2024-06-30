import { isHttpError } from 'http-errors';

export default function errorHandler(err, req, res, next) {
  if (isHttpError(err)) {
    return res.status(err.status).json({
      status: err.status,
      message: err.message,
      errors: err.errors || [],
    });
  }

  res.status(500).json({
    status: 500,
    message: 'Something went wrong',
    data: {
      message: err.message,
    },
  });
}
