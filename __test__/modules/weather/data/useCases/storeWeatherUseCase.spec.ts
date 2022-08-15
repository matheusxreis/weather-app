import { EmptyFieldError } from '../../../../../src/global/errors/emptyFieldError';
import { WeatherStoreParams } from '../../../../../src/modules/weather/data/irepositories/iStoreWeatherRepository';
import { StoreWeatherUseCase } from '../../../../../src/modules/weather/data/useCases/storeWeatherUseCase';

const dataDB = {
  city: 'string',
  actualTemperature: 'string',
  minTemperature: 'string',
  maxTemperature: 'string',
  photo: 'string',
  lastConsult: new Date().getTime(),
  cityId: 'string'
};

const makeSut = () => {
  const repository = {
    findConsultById: jest.fn(async () => await new Promise<WeatherStoreParams|null>((resolve, reject) => {
      resolve(null);
    })),
    storeWeather: jest.fn(),
    updateConsult: jest.fn()
  };
  const sut = new StoreWeatherUseCase(repository);
  return { sut, repository };
};

const params = {

  city: 'SP',
  actualTemperature: 'string',
  minTemperature: 'string',
  maxTemperature: 'string',
  iconId: 'string',
  photo: 'string',
  cityId: 'string'

};
describe('StoreWeatherUseCase', () => {
  it('should throws EmptyFieldError if params.city is empty', async () => {
    const { sut } = makeSut();

    const wrongParams = {
      city: '',
      actualTemperature: 'string',
      minTemperature: 'string',
      maxTemperature: 'string',
      iconId: 'string',
      photo: 'string',
      cityId: 'string'

    };

    expect(async () => await sut.execute(wrongParams)).rejects.toThrow(new EmptyFieldError('params.city'));
  });
  it('should throws EmptyFieldError if params.actualTemperature is empty', async () => {
    const { sut } = makeSut();

    const wrongParams = {
      city: 'SP',
      actualTemperature: '',
      minTemperature: 'string',
      maxTemperature: 'string',
      iconId: 'string',
      photo: 'string',
      cityId: 'string'

    };

    expect(async () => await sut.execute(wrongParams)).rejects.toThrow(new EmptyFieldError('params.actualTemperature'));
  });
  it('should throws EmptyFieldError if params.minTemperature is empty', async () => {
    const { sut } = makeSut();

    const wrongParams = {
      city: 'SP',
      actualTemperature: 'string',
      minTemperature: '',
      maxTemperature: 'string',
      iconId: 'string',
      photo: 'string',
      cityId: 'string'
    };

    expect(async () => await sut.execute(wrongParams)).rejects.toThrow(new EmptyFieldError('params.minTemperature'));
  });
  it('should throws EmptyFieldError if params.maxTemperature is empty', async () => {
    const { sut } = makeSut();

    const wrongParams = {
      city: 'SP',
      actualTemperature: 'string',
      minTemperature: 'string',
      maxTemperature: '',
      iconId: 'string',
      photo: 'string',
      cityId: 'string'
    };

    expect(async () => await sut.execute(wrongParams)).rejects.toThrow(new EmptyFieldError('params.maxTemperature'));
  });
  it('should throws EmptyFieldError if params.cityId is empty', async () => {
    const { sut } = makeSut();

    const wrongParams = {
      city: 'SP',
      actualTemperature: 'string',
      minTemperature: 'string',
      maxTemperature: 'string',
      iconId: 'string',
      photo: 'string',
      cityId: ''
    };

    expect(async () => await sut.execute(wrongParams)).rejects.toThrow(new EmptyFieldError('params.cityId'));
  });
  it('should findConsultById method receive right city id', async () => {
    const { sut, repository } = makeSut();

    await sut.execute(params);

    expect(repository.findConsultById).toBeCalledWith(params.cityId);
  });
  it('should call storeWeather with right params method if findConsultById method returns null', async () => {
    const { sut, repository } = makeSut();

    await sut.execute(params);
    const rightParams = {
      ...params,
      lastConsult: new Date().getTime()
    };

    expect(repository.storeWeather).toBeCalledWith(rightParams);
    expect(repository.updateConsult).not.toBeCalled();
  });
  it('should call updateConsult with right params method if findConsultById method returns a consult', async () => {
    const repository = {
      findConsultById: jest.fn(async () => await new Promise<WeatherStoreParams|null>((resolve, reject) => {
        resolve(dataDB);
      })),
      storeWeather: jest.fn(),
      updateConsult: jest.fn()
    };
    const sut = new StoreWeatherUseCase(repository);
    await sut.execute(params);
    const rightParams = {
      ...params,
      lastConsult: new Date().getTime()
    };

    expect(repository.updateConsult).toBeCalledWith(rightParams);
    expect(repository.storeWeather).not.toBeCalled();
  });
  it('should throws if findConsultById throws repository method throws', async () => {
    const repository = {
      findConsultById: () => { throw new Error(); },
      storeWeather: jest.fn(),
      updateConsult: jest.fn()
    };
    const sut = new StoreWeatherUseCase(repository);
    expect(async () => await sut.execute(params))
      .rejects
      .toThrow();
  });
  it('should throws if storeWeather repository method throws', async () => {
    const repository = {
      findConsultById: jest.fn(async () => await new Promise<WeatherStoreParams|null>((resolve, reject) => {
        resolve(null);
      })),
      storeWeather: () => { throw new Error(); },
      updateConsult: jest.fn()
    };
    const sut = new StoreWeatherUseCase(repository);
    expect(async () => await sut.execute(params))
      .rejects
      .toThrow();
  });
  it('should throws if updateConsult repository method throws', async () => {
    const repository = {
      findConsultById: jest.fn(async () => await new Promise<WeatherStoreParams|null>((resolve, reject) => {
        resolve(dataDB);
      })),
      storeWeather: jest.fn(),
      updateConsult: () => { throw new Error(); }
    };
    const sut = new StoreWeatherUseCase(repository);
    expect(async () => await sut.execute(params))
      .rejects
      .toThrow();
  });
});
