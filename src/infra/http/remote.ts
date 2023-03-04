import axios from 'axios'
import { settings } from '../../main/configs/settings'

export const api = axios.create({
  baseURL: settings.API_URL,
})

api.interceptors.request.use(async (config: any) => {
  try {
    return Promise.resolve(config)
  } catch (e) {
    return Promise.resolve(config)
  }
}, (error: Error) => Promise.reject(error))

api.interceptors.response.use((response: any) => response, async (error: any) => {
  const status = 'response' in error ? error.response.status : null

  if (status) {
    if (status >= 501 && status < 600) {
      window.location.href = `/${status}`
    } else {
      switch (status) {
        case 401:
          window.location.href = '/sair'
          break
        case 404:
          window.location.href = '/404'
          break
        case 500:
          return Promise.reject(error)
        default:
          window.location.href = '/sair'
          break
      }
    }
  } else {
    window.location.href = '/503'
  }
  return Promise.reject(error)
})
