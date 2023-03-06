import { GENDER, STATUS } from '../enums/rick-morty'

export namespace RickMortyProps {
  export type Model = {
    id: number
    name: string
    status: `${STATUS}`
    species: string
    type: string
    gender: `${GENDER}`
    origin: {
      name: string
      url: string
    }
    location: {
      name: string
      url: string
    }
    image: string
    episode: string[]
    url: string
    created: string
    points?: number
  }

  export type ResponseList = {
    info: {
      count: number
      pages: number
      next: string | null
      prev: string | null
    }
    results: Model[]
  }

  export type ParamsType = {
    name: string,
    status: STATUS,
    species: string,
    type: string,
    gender: GENDER
  }
}

export interface RickMorty {
  list: (params?: RickMortyProps.ParamsType) => Promise<RickMortyProps.ResponseList>
  get: (id: number) => Promise<RickMortyProps.Model>
}
