import { EmptyFieldError } from '../../../../global/errors/emptyFieldError';
import { Weather } from '../../domain/entities/weather';
import { iStoreLogUseCase } from '../../domain/iuseCases/istoreLogUseCase';
import { iStoreLogRepository } from '../irepositories/istoreLogRepository';

export class StoreLogUseCase implements iStoreLogUseCase {
  constructor (private repository: iStoreLogRepository) { }
  async execute (params: Weather): Promise<void> {
    if (!params.city) { throw new EmptyFieldError('params.city'); }
    if (!params.actualTemperature) { throw new EmptyFieldError('params.actualTemperature'); }
    if (!params.minTemperature) { throw new EmptyFieldError('params.minTemperature'); }
    if (!params.maxTemperature) { throw new EmptyFieldError('params.maxTemperature'); }
    if (!params.cityId) { throw new EmptyFieldError('params.cityId'); }

    const data = {
      ...params,
      lastConsult: new Date().getTime()
    };
    await this.repository.storeLog(data);
  }
}
