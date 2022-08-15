import { Weather } from '../entities/weather';

export type StoreWeatherParams = {
    cityId:string,
    weather:Weather
}

export interface iStoreWeatherUseCase {
execute(params: Weather):Promise<void>
}
