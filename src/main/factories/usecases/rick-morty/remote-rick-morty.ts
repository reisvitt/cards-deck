import { RemoteRickMorty } from '../../../../data/usecases/rick-morty/load-rick-morty'
import { RickMorty } from '../../../../domain/models/rick-morty-data'
import { makeAxiosHttpClient } from '../../http/axios-http-client-factory'

export const makeRemoteRickMorty = (): RickMorty => new RemoteRickMorty('/character', makeAxiosHttpClient())
