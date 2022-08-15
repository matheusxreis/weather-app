import { Weather } from '../entities/weather';

export interface iStoreLogUseCase {
execute(params: Weather):Promise<void>
}
