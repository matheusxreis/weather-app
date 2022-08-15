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
    findConsultById: jest.fn(async () => await new Promise<WeatherStoreParams>((resolve, reject) => {
      resolve(dataDB);
    })),
    storeWeather: jest.fn()
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
  it('should findConsultById method receive right city id', async () => {
    const { sut, repository } = makeSut();

    await sut.execute(params);

    expect(repository.findConsultById).toBeCalledWith(params.city);
  });
});
