export class AppError extends Error {
  public readonly statusCode: number;
  public readonly isOperational: boolean;
  public readonly details?: any;

  constructor(
    message: string,
    statusCode: number,
    isOperational = true,
    details?: any
  ) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    this.details = details;
    Error.captureStackTrace(this);
  }
}

//  Not-found Error
export class NotFoundError extends AppError {
  constructor(message = "Resources Not Found") {
    super(message, 404);
  }
}

//  Validation Error
export class ValidationError extends AppError {
  constructor(message = "Invalid Request Data", details?: any) {
    super(message, 400, true, details);
  }
}

//  Authentication Error
export class AuthError extends AppError {
  constructor(message = "Unauthorized", details?: any) {
    super(message, 401, true, details);
  }
}

//  Forbidden Error
export class ForbiddenError extends AppError {
  constructor(message = "Forbidden Error", details?: any) {
    super(message, 403, true, details);
  }
}

//  Database Error
export class DatabaseError extends AppError {
  constructor(message = "Database Error", details?: any) {
    super(message, 500, true, details);
  }
}

//  RateLimiting Error
export class RateLimitError extends AppError {
  constructor(
    message = "Too Many Requests,Please Try Again Later",
    details?: any
  ) {
    super(message, 429, true, details);
  }
}
