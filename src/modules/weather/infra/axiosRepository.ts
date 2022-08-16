import { EmptyFieldError } from '../../../global/errors/emptyFieldError';
import { GetWeatherResponse, iGetWeatherRepository } from '../data/irepositories/igetWeatherRepository';
import { api } from './helpers/api';

export class AxiosRepository implements iGetWeatherRepository {
  async getWeather (params: { latitute: string; longitude: string; }): Promise<GetWeatherResponse> {
    if (!params.latitute) { throw new EmptyFieldError('params.latitude'); }
    if (!params.longitude) { throw new EmptyFieldError('params.longitude'); }
    return await api.get(`onecall?lat=${params.latitute}&lon=${params.longitude}&appid=${'ca901cb68cac0e43b462bb91626bee72'}`);
    ;
  }
}
