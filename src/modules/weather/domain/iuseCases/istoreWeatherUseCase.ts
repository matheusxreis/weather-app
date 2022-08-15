import { Weather } from '../entities/weather';

type StoreWeatherParams = {
    city:string,
    weather:Weather
}

export interface iStoreWeatherUseCase {
execute(params: StoreWeatherParams):Promise<void>
}
