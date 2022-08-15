import { EmptyFieldError } from '../../../../../src/global/errors/emptyFieldError';
import { StoreLogUseCase } from '../../../../../src/modules/weather/data/useCases/storeLogUseCase';

const makeSut = () => {
  const repository = { storeLog: jest.fn() };
  const sut = new StoreLogUseCase(repository);
  return { sut, repository };
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
    const { sut, repository } = makeSut();
    const wrongParams = {
      ...params,
      city: ''
    };
    expect(async () => await sut.execute(wrongParams)).rejects.toThrow(new EmptyFieldError('params.city'));
    expect(repository.storeLog).not.toBeCalled();
  });
  it('should throw a EmptyFieldError if params.actualTemperature is empty', async () => {
    const { sut, repository } = makeSut();
    const wrongParams = {
      ...params,
      actualTemperature: ''
    };
    expect(async () => await sut.execute(wrongParams)).rejects.toThrow(new EmptyFieldError('params.actualTemperature'));
    expect(repository.storeLog).not.toBeCalled();
  });
  it('should throw a EmptyFieldError if params.minTemperature is empty', async () => {
    const { sut, repository } = makeSut();
    const wrongParams = {
      ...params,
      minTemperature: ''
    };
    expect(async () => await sut.execute(wrongParams)).rejects.toThrow(new EmptyFieldError('params.minTemperature'));
    expect(repository.storeLog).not.toBeCalled();
  });
  it('should throw a EmptyFieldError if params.maxTemperature is empty', async () => {
    const { sut, repository } = makeSut();
    const wrongParams = {
      ...params,
      maxTemperature: ''
    };
    expect(async () => await sut.execute(wrongParams)).rejects.toThrow(new EmptyFieldError('params.maxTemperature'));
    expect(repository.storeLog).not.toBeCalled();
  });
  it('should throw a EmptyFieldError if params.cityId is empty', async () => {
    const { sut, repository } = makeSut();
    const wrongParams = {
      ...params,
      cityId: ''
    };
    expect(async () => await sut.execute(wrongParams)).rejects.toThrow(new EmptyFieldError('params.cityId'));
    expect(repository.storeLog).not.toBeCalled();
  });
  it('should storeLog repository method receive correct params', async () => {
    const { sut, repository } = makeSut();

    const rightParams = {
      ...params,
      lastConsult: new Date().getTime()
    };
    await sut.execute(params);

    expect(repository.storeLog).toBeCalledWith(rightParams);
  });
  it('should throws if repository throws', async () => {
    const repository = { storeLog: () => { throw new Error(); } };
    const sut = new StoreLogUseCase(repository);

    expect(async () => await sut.execute(params)).rejects.toThrow();
  });
});
