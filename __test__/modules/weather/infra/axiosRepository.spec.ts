import { EmptyFieldError } from '../../../../src/global/errors/emptyFieldError';
import { AxiosRepository } from '../../../../src/modules/weather/infra/axiosRepository';
import { api } from '../../../../src/modules/weather/infra/helpers/api';

const fakeResponse = {
  main: {
    temp: 12,
    feels_like: 12,
    temp_min: 12,
    temp_max: 12,
    pressure: 12,
    humidity: 12
  },
  weather: {
    id: 1232,
    icon: 'string'
  },
  id: 2122,
  name: 'string'
};
const params = { latitute: '1292822', longitude: '18228' };

const makeSut = () => {
  const sut = new AxiosRepository();
  return { sut };
};

describe('AxiosRepository', () => {
  it('should throws a EmptyFieldError if params.latitude is empty', async () => {
    const { sut } = makeSut();

    expect(async () =>
      await sut.getWeather({ latitute: '', longitude: '1191o192' }))
      .rejects.toThrow(new EmptyFieldError('params.latitude'));
  });
  it('should throws a EmptyFieldError if params.latitude is empty', async () => {
    const { sut } = makeSut();

    expect(async () =>
      await sut.getWeather({ latitute: '192922', longitude: '' }))
      .rejects.toThrow(new EmptyFieldError('params.longitude'));
  });
  it('should api.post receive correct lat and lon params', async () => {
    const mockApi = jest.spyOn(api, 'get').mockImplementation(async (params:any) => params);

    const { sut } = makeSut();

    const path = await sut.getWeather(params);
    expect(path).toBe(`weather?lat=${params.latitute}&lon=${params.longitude}&appid=undefined`);
    mockApi.mockClear();
  });
  it('should api.post returns correct response if all is ok', async () => {
    const { sut } = makeSut();
    jest.spyOn(api, 'get').mockImplementation(async () => await new Promise((resolve, reject) => {
      resolve(fakeResponse);
    }));

    const response = await sut.getWeather(params);

    expect(response).toEqual(fakeResponse);
  });
  it('should throws if datasource throws', async () => {
    jest.spyOn(api, 'get').mockImplementation(async () => { throw new Error(); });
    const sut = new AxiosRepository();
    expect(async () => await sut.getWeather(params)).rejects.toThrow();
  });
});
