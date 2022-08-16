import { EmptyFieldError } from '../../../global/errors/emptyFieldError';
import { GetWeatherResponse, iGetWeatherRepository } from '../data/irepositories/igetWeatherRepository';
import { api } from './helpers/api';

class AxiosRepository implements iGetWeatherRepository {
  async getWeather (params: { latitute: string; longitude: string; }): Promise<GetWeatherResponse> {
    if (!params.latitute) { throw new EmptyFieldError('params.latitude'); }
    if (!params.longitude) { throw new EmptyFieldError('params.longitude'); }
    const response = await api.get(`weather?lat=${params.latitute}&lon=${params.longitude}&units=metric&&appid=${'ca901cb68cac0e43b462bb91626bee72'}`);
    ;
    return response.data;
  }
}

export { AxiosRepository };
