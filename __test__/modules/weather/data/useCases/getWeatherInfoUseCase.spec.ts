import { GetWeatherInfoUseCase } from '../../../../../src/modules/weather/data/useCases/getWeatherInfoUseCase';
import { EmptyFieldError } from '../../../../../src/global/errors/emptyFieldError';
const params = {
  latitute: '24',
  longitude: '25'
};
const fakeResponse = {
  main: {
    temp: 282.55,
    feels_like: 281.86,
    temp_min: 280.37,
    temp_max: 284.26,
    pressure: 1023,
    humidity: 100
  },
  weather: {
    id: 12978292,
    icon: '18871'
  },
  id: 182729202,
  name: 'anyCity'

};
const makeSut = () => {
  const repository = {
    getWeather: jest.fn().mockImplementation(async () =>
      await new Promise((resolve, reject) => resolve(fakeResponse))
    )
  };
  const sut = new GetWeatherInfoUseCase(repository);
  return { sut, repository };
};

describe('GetWeatherInfoUseCase', () => {
  it('should throws EmptyFieldError if latitute is empty', async () => {
    const { sut, repository } = makeSut();

    expect(async () => await sut.execute({ latitute: '', longitude: '12' }))
      .rejects.toThrow(new EmptyFieldError('latitude'));
    expect(repository.getWeather).not.toBeCalled();
  });
  it('should throws EmptyFieldError if longitude is empty', async () => {
    const { sut, repository } = makeSut();

    expect(async () => await sut.execute({ latitute: '12', longitude: '' }))
      .rejects.toThrow(new EmptyFieldError('longitude'));
    expect(repository.getWeather).not.toBeCalled();
  });
  it('should repository receive right params', async () => {
    const { sut, repository } = makeSut();

    await sut.execute(params);
    expect(repository.getWeather).toBeCalledWith(params);
  });
  it('should return a right response if all is ok with repository', async () => {
    const { sut } = makeSut();

    const rigthResponse = {
      actualTemperature: fakeResponse.main.temp.toString(),
      city: fakeResponse.name,
      maxTemperature: fakeResponse.main.temp_max.toString(),
      minTemperature: fakeResponse.main.temp_min.toString(),
      iconId: fakeResponse.weather.icon
    };
    const response = await sut.execute(params);
    expect(response).toEqual(rigthResponse);
  });
  it('should throws if repository throws', async () => {
    const repository = { getWeather: () => { throw new Error(); } };
    const sut = new GetWeatherInfoUseCase(repository);
    expect(async () => await sut.execute(params)).rejects.toThrow();
  });
});
