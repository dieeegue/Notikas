type ErrorName = "LOADING_ERROR";

export class ErrorBase<T extends ErrorName> extends Error {
  name: T;
  message: string;
  cause?: any;

  constructor({
    name,
    message,
    cause,
  }: {
    name: T;
    message: string;
    cause?: any;
  }) {
    super();
    this.name = name;
    this.message = message;
    this.cause = cause;
  }
}

export class LoadingError extends ErrorBase<"LOADING_ERROR"> {}
