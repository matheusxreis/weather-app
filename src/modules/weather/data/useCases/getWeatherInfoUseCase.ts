import { Weather } from '../../domain/entities/weather';
import { iGetWeatherInfoUseCase } from '../../domain/iuseCases/igetWeatherInfoUseCase';

export class GetWeatherInfoUseCase implements iGetWeatherInfoUseCase {
  execute (params: { latitute: string; longitude: string; }): Promise<Weather> {
    throw new Error('Method not implemented.');
  }
}
