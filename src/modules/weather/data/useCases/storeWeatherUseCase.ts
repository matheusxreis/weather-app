import { EmptyFieldError } from '../../../../global/errors/emptyFieldError';
import { Weather } from '../../domain/entities/weather';
import { iStoreWeatherUseCase } from '../../domain/iuseCases/istoreWeatherUseCase';
import { iStoreWeatherRepository } from '../irepositories/iStoreWeatherRepository';

export class StoreWeatherUseCase implements iStoreWeatherUseCase {
  constructor (private repository: iStoreWeatherRepository) {}
  async execute (params:Weather): Promise<void> {
    if (!params.city) { throw new EmptyFieldError('params.city'); }
    if (!params.actualTemperature) { throw new EmptyFieldError('params.actualTemperature'); }
    if (!params.minTemperature) { throw new EmptyFieldError('params.minTemperature'); }
    if (!params.maxTemperature) { throw new EmptyFieldError('params.maxTemperature'); }
    if (!params.cityId) { throw new EmptyFieldError('params.cityId'); }
    const data = await this.repository.findConsultById(params.cityId);
    if (data) {
      this.repository.updateConsult({
        ...params,
        lastConsult: new Date().getTime(
        )
      });
      return;
    }
    await this.repository.storeWeather({
      ...params,
      lastConsult: new Date().getTime()
    });
  }
}
