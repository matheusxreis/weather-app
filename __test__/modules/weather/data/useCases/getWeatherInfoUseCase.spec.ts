import { GetWeatherInfoUseCase } from '../../../../../src/modules/weather/data/useCases/getWeatherInfoUseCase';
import { EmptyFieldError } from '../../../../../src/global/errors/emptyFieldError';
const params = {
  latitute: '24',
  longitude: '25'
};
const makeSut = () => {
  const sut = new GetWeatherInfoUseCase();
  return { sut };
};

describe('GetWeatherInfoUseCase', () => {
  it('should throws EmptyFieldError if latitute is empty', async () => {
    const { sut } = makeSut();

    expect(async () => await sut.execute({ latitute: '', longitude: '12' }))
      .rejects.toThrow(new EmptyFieldError('latitude'));
  });
  it('should throws EmptyFieldError if longitude is empty', async () => {
    const { sut } = makeSut();

    expect(async () => await sut.execute({ latitute: '12', longitude: '' }))
      .rejects.toThrow(new EmptyFieldError('longitude'));
  });
});
