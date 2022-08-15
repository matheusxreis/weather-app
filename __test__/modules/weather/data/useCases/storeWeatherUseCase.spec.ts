import { EmptyFieldError } from '../../../../../src/global/errors/emptyFieldError';
import { StoreWeatherUseCase } from '../../../../../src/modules/weather/data/useCases/storeWeatherUseCase';

const makeSut = () => {
  const sut = new StoreWeatherUseCase();
  return { sut };
};

const params = {
  cityId: 'SP121212',
  weather: {
    city: 'SP',
    actualTemperature: 'string',
    minTemperature: 'string',
    maxTemperature: 'string',
    iconId: 'string',
    photo: 'string'

  }
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
      photo: 'string'

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
      photo: 'string'

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
      photo: 'string'

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
});
