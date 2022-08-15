import { EmptyFieldError } from '../../../../../src/global/errors/emptyFieldError';
import { StoreLogUseCase } from '../../../../../src/modules/weather/data/useCases/storeLogUseCase';

const makeSut = () => {
  const sut = new StoreLogUseCase();
  return { sut };
};

const params = {

  city: 'any.city',
  actualTemperature: 'any.temp',
  minTemperature: 'any.min',
  maxTemperature: 'any.max',
  iconId: 'any.icon.id',
  cityId: 'any.city.id',
  photo: 'any.photo'

};

describe('StoreLogUseCase', () => {
  it('should throw a EmptyFieldError if params.city is empty', async () => {
    const { sut } = makeSut();
    const wrongParams = {
      ...params,
      city: ''
    };
    expect(async () => await sut.execute(wrongParams)).rejects.toThrow(new EmptyFieldError('params.city'));
  });
  it('should throw a EmptyFieldError if params.actualTemperature is empty', async () => {
    const { sut } = makeSut();
    const wrongParams = {
      ...params,
      actualTemperature: ''
    };
    expect(async () => await sut.execute(wrongParams)).rejects.toThrow(new EmptyFieldError('params.actualTemperature'));
  });
  it('should throw a EmptyFieldError if params.minTemperature is empty', async () => {
    const { sut } = makeSut();
    const wrongParams = {
      ...params,
      minTemperature: ''
    };
    expect(async () => await sut.execute(wrongParams)).rejects.toThrow(new EmptyFieldError('params.minTemperature'));
  });
  it('should throw a EmptyFieldError if params.maxTemperature is empty', async () => {
    const { sut } = makeSut();
    const wrongParams = {
      ...params,
      maxTemperature: ''
    };
    expect(async () => await sut.execute(wrongParams)).rejects.toThrow(new EmptyFieldError('params.maxTemperature'));
  });
  it('should throw a EmptyFieldError if params.cityId is empty', async () => {
    const { sut } = makeSut();
    const wrongParams = {
      ...params,
      cityId: ''
    };
    expect(async () => await sut.execute(wrongParams)).rejects.toThrow(new EmptyFieldError('params.cityId'));
  });
});
