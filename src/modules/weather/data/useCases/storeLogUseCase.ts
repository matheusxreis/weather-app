import { Weather } from '../../domain/entities/weather';
import { iStoreLogUseCase } from '../../domain/iuseCases/istoreLogUseCase';

export class StoreLogUseCase implements iStoreLogUseCase {
  execute (params: { consult: Weather; consultedAt: number; }): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
