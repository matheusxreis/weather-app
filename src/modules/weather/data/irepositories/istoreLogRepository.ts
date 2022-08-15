import { WeatherStoreParams } from './iStoreWeatherRepository';

export interface iStoreLogRepository {
    storeLog(params: WeatherStoreParams):Promise<void>
}
