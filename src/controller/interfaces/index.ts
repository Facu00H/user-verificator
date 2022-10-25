import { BasicResponse } from '../types'

export interface IHelloController {
  getMessage(name?:string): Promise<BasicResponse>
}

export interface IByeController {
  getMessage(date: string, name?:string): Promise<BasicResponse>
}
