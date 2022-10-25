import { BasicResponseBye } from './types'
import { IByeController } from './interfaces'
import { logSucces } from '../utils/logger'

export class ByeController implements IByeController {
  public async getMessage (date: string, name?: string | undefined): Promise<BasicResponseBye> {
    logSucces('[api/Bye] Get Request')

    return {
      message: `GoodBye ${name}!`,
      date
    }
  }
}
