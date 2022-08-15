import { EmptyFieldError } from '../../../../global/errors/emptyFieldError';
import { Weather } from '../../domain/entities/weather';
import { iStoreLogUseCase } from '../../domain/iuseCases/istoreLogUseCase';

export class StoreLogUseCase implements iStoreLogUseCase {
  execute (params: Weather): Promise<void> {
    if (!params.city) { throw new EmptyFieldError('params.city'); }
    if (!params.actualTemperature) { throw new EmptyFieldError('params.actualTemperature'); }
    if (!params.minTemperature) { throw new EmptyFieldError('params.minTemperature'); }
    if (!params.maxTemperature) { throw new EmptyFieldError('params.maxTemperature'); }
    if (!params.cityId) { throw new EmptyFieldError('params.cityId'); }
    throw new Error('Method not implemented.');
  }
}
