/* eslint-disable camelcase */

import { EmptyFieldError } from '../../../../global/errors/emptyFieldError';
import { Weather } from '../../domain/entities/weather';
import { iGetWeatherInfoUseCase } from '../../domain/iuseCases/igetWeatherInfoUseCase';
import { iGetWeatherRepository } from '../irepositories/igetWeatherRepository';

export class GetWeatherInfoUseCase implements iGetWeatherInfoUseCase {
  constructor (private repository: iGetWeatherRepository) {}
  async execute (params: { latitute: string; longitude: string; }): Promise<Weather> {
    if (!params.latitute) { throw new EmptyFieldError('latitude'); }
    if (!params.longitude) { throw new EmptyFieldError('longitude'); }

    const response = await this.repository.getWeather(params);

    const {
      temp,
      temp_max,
      temp_min
    } = response.main;
    return {
      actualTemperature: temp.toString(),
      city: response.name,
      maxTemperature: temp_max.toString(),
      minTemperature: temp_min.toString(),
      iconId: response.weather.icon,
      cityId: response.weather.id.toString()
    };
  }
}
