import { Weather } from '../entities/weather';

type WeatherInfoParams = {
    latitute:string,
    longitude:string
}

export interface iGetWeatherInfoUseCase {
execute(params: WeatherInfoParams):Promise<Weather>
}
