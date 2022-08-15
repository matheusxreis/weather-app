import { Weather } from '../entities/weather';

type StoreWeatherParams = {
    city:string,
    weather:Weather
}

type StoreLogsParams = {
    consult: StoreWeatherParams,
    consultedAt: number
}

export interface iStoreLogUseCase {
execute(params: StoreLogsParams):Promise<void>
}
