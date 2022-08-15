import { Weather } from '../../domain/entities/weather';
import { iStoreWeatherUseCase } from '../../domain/iuseCases/istoreWeatherUseCase';

export class StoreWeatherUseCase implements iStoreWeatherUseCase {
  execute (params: { city: string; weather: Weather; }): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
