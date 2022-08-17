import { FirebaseRepository } from '../../../../src/modules/weather/infra/firebaseRepository';
import { EmptyFieldError } from '../../../../src/global/errors/emptyFieldError';

import firestore, { collection } from 'firebase/firestore';

const makeSut = () => {
  const sut = new FirebaseRepository();
  return { sut };
};

const params = {
  city: 'any_city',
  actualTemperature: 'actual_temperature',
  minTemperature: 'min_temperature',
  maxTemperature: 'max_temperature',
  lastConsult: new Date().getTime(),
  cityId: 'city_id'

};

jest.mock('firebase/firestore', () => {
  return {
    addDoc: jest.fn(),
    collection: jest.fn(),
    getFirestore: jest.fn()
  };
});

describe('FirebaseRepository', () => {
  it('should throws a EmptyFieldError if params.city is empty in storeLog method', async () => {
    const wrongParams = {
      city: '',
      actualTemperature: 'actual_temperature',
      minTemperature: 'min_temperature',
      maxTemperature: 'max_temperature',
      lastConsult: new Date().getTime(),
      cityId: 'city_id'
    };
    const { sut } = makeSut();

    expect(async () => await sut.storeLog(wrongParams))
      .rejects
      .toThrow(new EmptyFieldError('params.city'));
  });
  it('should throws a EmptyFieldError if params.maxTemperature is empty in storeLog method', async () => {
    const wrongParams = {
      city: 'any_city',
      actualTemperature: 'actual_temperature',
      minTemperature: 'min_temperature',
      maxTemperature: '',
      lastConsult: new Date().getTime(),
      cityId: 'city_id'
    };
    const { sut } = makeSut();

    expect(async () => await sut.storeLog(wrongParams))
      .rejects
      .toThrow(new EmptyFieldError('params.maxTemperature'));
  });
  it('should throws a EmptyFieldError if params.minTemperature is empty in storeLog method', async () => {
    const wrongParams = {
      city: 'any_city',
      actualTemperature: 'actual_temperature',
      minTemperature: '',
      maxTemperature: 'max_temperature',
      lastConsult: new Date().getTime(),
      cityId: 'city_id'
    };
    const { sut } = makeSut();

    expect(async () => await sut.storeLog(wrongParams))
      .rejects
      .toThrow(new EmptyFieldError('params.minTemperature'));
  });
  it('should throws a EmptyFieldError if params.actualTemperature is empty in storeLog method', async () => {
    const wrongParams = {
      city: 'any_city',
      actualTemperature: '',
      minTemperature: 'min_temperature',
      maxTemperature: 'max_temperature',
      lastConsult: new Date().getTime(),
      cityId: 'city_id'
    };
    const { sut } = makeSut();

    expect(async () => await sut.storeLog(wrongParams))
      .rejects
      .toThrow(new EmptyFieldError('params.actualTemperature'));
  });
  it('should throws a EmptyFieldError if params.cityId is empty in storeLog method', async () => {
    const wrongParams = {
      city: 'any_city',
      actualTemperature: 'actual_temperature',
      minTemperature: 'min_temperature',
      maxTemperature: 'max_temperature',
      lastConsult: new Date().getTime(),
      cityId: ''
    };
    const { sut } = makeSut();

    expect(async () => await sut.storeLog(wrongParams))
      .rejects
      .toThrow(new EmptyFieldError('params.cityId'));
  });
});
