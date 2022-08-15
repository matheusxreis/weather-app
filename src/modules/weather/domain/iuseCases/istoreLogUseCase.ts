import { Weather } from '../entities/weather';

type StoreLogsParams = {
    consult: Weather,
    consultedAt: number
}

export interface iStoreLogUseCase {
execute(params: StoreLogsParams):Promise<void>
}
