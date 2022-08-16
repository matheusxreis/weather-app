/* eslint-disable camelcase */

import { EmptyFieldError } from '../../../../global/errors/emptyFieldError';
import { iGetWeatherInfoUseCase } from '../../domain/iuseCases/igetWeatherInfoUseCase';
import { iGetWeatherRepository } from '../irepositories/igetWeatherRepository';
class GetWeatherInfoUseCase implements iGetWeatherInfoUseCase {
  constructor (private repository: iGetWeatherRepository) {}
  async execute (params: { latitute: string; longitude: string; }) {
    if (!params.latitute) { throw new EmptyFieldError('latitude'); }
    if (!params.longitude) { throw new EmptyFieldError('longitude'); }

    const response = await this.repository.getWeather(params);

    const {
      temp,
      temp_max,
      temp_min
    } = response.main;
    console.log(response, 'usecASE');
    return {
      actualTemperature: String(temp),
      city: response.name,
      maxTemperature: String(temp_max),
      minTemperature: String(temp_min),
      iconId: response.weather.icon,
      cityId: String(response.weather.id)
    };
  }
}

export { GetWeatherInfoUseCase };
