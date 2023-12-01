type ErrorName =
  | 'LOADING_ERROR'
  | 'SEARCH_ERROR'
  | 'CREATION_ERROR'
  | 'UPDATE_ERROR'
  | 'DELETION_ERROR'

export class ErrorBase<T extends ErrorName> extends Error {
  name: T
  message: string
  cause?: any

  constructor({
    name,
    message,
    cause,
  }: {
    name: T
    message: string
    cause?: any
  }) {
    super()
    this.name = name
    this.message = message
    this.cause = cause
  }
}

export class LoadingError extends ErrorBase<'LOADING_ERROR'> {}
export class SearchError extends ErrorBase<'SEARCH_ERROR'> {}
export class CreationError extends ErrorBase<'CREATION_ERROR'> {}
export class UpdateError extends ErrorBase<'UPDATE_ERROR'> {}
export class DeletionError extends ErrorBase<'DELETION_ERROR'> {}
