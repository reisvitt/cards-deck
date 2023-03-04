import { AxiosHttpClient } from '../../../infra/http/axios-http-client/axios-http-client'
import { settings } from '../../configs/settings'

export const makeAxiosHttpClient = () => new AxiosHttpClient(settings.API_URL || '')
