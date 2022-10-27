import { Get, Query, Route, Tags } from 'tsoa'
import { BasicResponse } from './types'
import { IHelloController } from './interfaces'
import { logSucces } from '../utils/logger'

@Route('/api/hello')
@Tags('HelloController')
export class HelloController implements IHelloController {
  /**
   * Endpoint to retreive a Message "Hello (name)" in JSON
   * @param { string | undefined } name Name of user to be greated
   * @returns { BasicResponse } Promise of basic response
   */
  @Get('/')
  public async getMessage (@Query()name?: string | undefined): Promise<BasicResponse> {
    logSucces('[api/hello] Get Request')

    return {
      message: `Hello ${name}!`
    }
  }
}
