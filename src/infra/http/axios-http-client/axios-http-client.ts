import axios, { AxiosResponse } from 'axios'
import { HttpClient, HttpRequest, HttpResponse } from '../../../data/protocols/http/http-client'

export class AxiosHttpClient implements HttpClient {
  constructor(
    private readonly baseUrl: string,
  ) { }

  async request(data: HttpRequest): Promise<HttpResponse> {
    let axiosResponse: AxiosResponse
    try {
      let req: any = {
        url: this.baseUrl + data.url,
        method: data.method,
        data: data.body,
        ...(data?.params && { params: data?.params }),
        headers: data?.headers,
      }

      if (data.responseType) {
        req = { ...req, responseType: data.responseType }
      }

      axiosResponse = await axios.request(req)
    } catch (error: any) {
      axiosResponse = error.response
    }
    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data,
    }
  }
}
