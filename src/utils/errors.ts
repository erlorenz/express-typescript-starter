export class GeneralError extends Error {
  statusCode = 500;
  constructor(message: string) {
    super(message);
  }
}

export class BadRequestError extends GeneralError {
  name = 'BadRequestError';
  statusCode = 400;
}

export class ForbiddenError extends GeneralError {
  name = 'ForbiddenError';
  statusCode = 403;
}

export class UnauthorizedError extends GeneralError {
  name = 'UnauthorizedError';
  statusCode = 401;
}

export class NotFoundError extends GeneralError {
  name = 'NotFoundError';
  statusCode = 404;
}
