/**
 *  Basic JSON response for controller
 */

export type BasicResponse = {
  message: string,
}

export type BasicResponseBye = {
  message: string,
  date: string,
}

/**
 *  Error response for controllers
 */

export type ErrorResponse = {
  error: string,
  message: string
}
