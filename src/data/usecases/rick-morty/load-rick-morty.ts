import {
  UnexpectedError, NotFoundError, UnauthorizedError, BadRequestError,
} from '../../../domain/errors'
import { RickMorty, RickMortyProps } from '../../../domain/models/rick-morty-data'
import { HttpClient, HttpStatusCode } from '../../protocols/http/http-client'

export class RemoteRickMorty implements RickMorty {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient,
  ) { }

  async list(params?: RickMortyProps.ParamsType): Promise<RickMortyProps.ResponseList> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'get',
      params,
    })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return httpResponse.body
      case HttpStatusCode.unauthorized: throw new UnauthorizedError()
      case HttpStatusCode.notFound: throw new NotFoundError()
      case HttpStatusCode.badRequest: throw new BadRequestError()
      default: throw new UnexpectedError()
    }
  }

  async get(id: number): Promise<RickMortyProps.Model> {
    const httpResponse = await this.httpClient.request({
      url: `${this.url}/${id}`,
      method: 'get',
    })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return httpResponse.body
      case HttpStatusCode.unauthorized: throw new UnauthorizedError()
      case HttpStatusCode.notFound: throw new NotFoundError()
      case HttpStatusCode.badRequest: throw new BadRequestError()
      default: throw new UnexpectedError()
    }
  }
}
