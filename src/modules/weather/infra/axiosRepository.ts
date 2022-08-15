import { GetWeatherResponse, iGetWeatherRepository } from '../data/irepositories/igetWeatherRepository';

export class AxiosRepository implements iGetWeatherRepository {
  getWeather (params: { latitute: string; longitude: string; }): Promise<GetWeatherResponse> {
    throw new Error('Method not implemented.');
  }
}
