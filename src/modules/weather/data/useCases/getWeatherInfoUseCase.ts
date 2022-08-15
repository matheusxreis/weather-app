import { EmptyFieldError } from '../../../../global/errors/emptyFieldError';
import { Weather } from '../../domain/entities/weather';
import { iGetWeatherInfoUseCase } from '../../domain/iuseCases/igetWeatherInfoUseCase';

export class GetWeatherInfoUseCase implements iGetWeatherInfoUseCase {
  async execute (params: { latitute: string; longitude: string; }): Promise<Weather> {
    if (!params.latitute) { throw new EmptyFieldError('latitude'); }
    if (!params.longitude) { throw new EmptyFieldError('longitude'); }
    return {
      actualTemperature: '',
      city: '',
      maxTemperature: '',
      minTemperature: '',
      photo: ''
    };
  }
}
