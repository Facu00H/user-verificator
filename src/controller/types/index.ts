/**
 *  Basic JSON response for controller
 */

export type BasicResponse = {
  message: string,
}

/**
 *  Error response for controllers
 */

export type ErrorResponse = {
  error: string,
  message: string
}
