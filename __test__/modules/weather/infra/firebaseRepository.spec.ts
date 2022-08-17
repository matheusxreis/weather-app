import { FirebaseRepository } from '../../../../src/modules/weather/infra/firebaseRepository';
import { EmptyFieldError } from '../../../../src/global/errors/emptyFieldError';

import firestore from 'firebase/firestore';

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
  cityId: 'city_id',
  photo: ''

};

const fakeDoc = {
  data: () => 'fakeWeatherStoreParams',
  id: 'fakeIdFromFakeDoc'
};
jest.mock('firebase/firestore', () => {
  return {
    addDoc: jest.fn(),
    collection: jest.fn().mockImplementation(() => 'fakeCollection'),
    getFirestore: jest.fn().mockImplementation(() => 'fakeDB'),
    query: jest.fn().mockImplementation(() => 'fakeQuery'),
    where: jest.fn().mockImplementation(() => 'fakeWhere'),
    getDocs: jest.fn().mockImplementation(() => ([fakeDoc, fakeDoc])),
    doc: jest.fn().mockImplementation(() => 'fakeDoc'),
    updateDoc: jest.fn()
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
  it('should collection method receive correct params in storeLog method', async () => {
    const { sut } = makeSut();

    await sut.storeLog(params);

    expect(firestore.collection).toBeCalledWith('fakeDB', 'log');
  });
  it('should addDB method be receive correct params git in storeLog method', async () => {
    const { sut } = makeSut();

    await sut.storeLog(params);

    expect(firestore.addDoc).toBeCalledWith('fakeCollection', params);
  });
  it('should throws a EmptyFieldError if params.city is empty in storeWeather method', async () => {
    const wrongParams = {
      city: '',
      actualTemperature: 'actual_temperature',
      minTemperature: 'min_temperature',
      maxTemperature: 'max_temperature',
      lastConsult: new Date().getTime(),
      cityId: 'city_id'
    };
    const { sut } = makeSut();

    expect(async () => await sut.storeWeather(wrongParams))
      .rejects
      .toThrow(new EmptyFieldError('params.city'));
  });
  it('should throws a EmptyFieldError if params.maxTemperature is empty in storeWeather method', async () => {
    const wrongParams = {
      city: 'any_city',
      actualTemperature: 'actual_temperature',
      minTemperature: 'min_temperature',
      maxTemperature: '',
      lastConsult: new Date().getTime(),
      cityId: 'city_id'
    };
    const { sut } = makeSut();

    expect(async () => await sut.storeWeather(wrongParams))
      .rejects
      .toThrow(new EmptyFieldError('params.maxTemperature'));
  });
  it('should throws a EmptyFieldError if params.minTemperature is empty in storeWeather method', async () => {
    const wrongParams = {
      city: 'any_city',
      actualTemperature: 'actual_temperature',
      minTemperature: '',
      maxTemperature: 'max_temperature',
      lastConsult: new Date().getTime(),
      cityId: 'city_id'
    };
    const { sut } = makeSut();

    expect(async () => await sut.storeWeather(wrongParams))
      .rejects
      .toThrow(new EmptyFieldError('params.minTemperature'));
  });
  it('should throws a EmptyFieldError if params.actualTemperature is empty in storeWeather method', async () => {
    const wrongParams = {
      city: 'any_city',
      actualTemperature: '',
      minTemperature: 'min_temperature',
      maxTemperature: 'max_temperature',
      lastConsult: new Date().getTime(),
      cityId: 'city_id'
    };
    const { sut } = makeSut();

    expect(async () => await sut.storeWeather(wrongParams))
      .rejects
      .toThrow(new EmptyFieldError('params.actualTemperature'));
  });
  it('should throws a EmptyFieldError if params.cityId is empty in storeWeather method', async () => {
    const wrongParams = {
      city: 'any_city',
      actualTemperature: 'actual_temperature',
      minTemperature: 'min_temperature',
      maxTemperature: 'max_temperature',
      lastConsult: new Date().getTime(),
      cityId: ''
    };
    const { sut } = makeSut();

    expect(async () => await sut.storeWeather(wrongParams))
      .rejects
      .toThrow(new EmptyFieldError('params.cityId'));
  });
  it('should collection method be receive correct params in storeWeather method', async () => {
    const { sut } = makeSut();

    await sut.storeWeather(params);

    expect(firestore.collection).toBeCalledWith('fakeDB', 'consult');
  });
  it('should addDB method be receive correct params in storeWeather method', async () => {
    const { sut } = makeSut();

    await sut.storeWeather(params);

    expect(firestore.addDoc).toBeCalledWith('fakeCollection', params);
  });
  it('should throws a EmptyFieldError if params.city is empty in updateConsult method', async () => {
    const wrongParams = {
      city: '',
      actualTemperature: 'actual_temperature',
      minTemperature: 'min_temperature',
      maxTemperature: 'max_temperature',
      lastConsult: new Date().getTime(),
      cityId: 'city_id'
    };
    const { sut } = makeSut();

    expect(async () => await sut.updateConsult(wrongParams))
      .rejects
      .toThrow(new EmptyFieldError('params.city'));
  });
  it('should throws a EmptyFieldError if params.maxTemperature is empty in updateConsult method', async () => {
    const wrongParams = {
      city: 'any_city',
      actualTemperature: 'actual_temperature',
      minTemperature: 'min_temperature',
      maxTemperature: '',
      lastConsult: new Date().getTime(),
      cityId: 'city_id'
    };
    const { sut } = makeSut();

    expect(async () => await sut.updateConsult(wrongParams))
      .rejects
      .toThrow(new EmptyFieldError('params.maxTemperature'));
  });
  it('should throws a EmptyFieldError if params.minTemperature is empty in updateConsult method', async () => {
    const wrongParams = {
      city: 'any_city',
      actualTemperature: 'actual_temperature',
      minTemperature: '',
      maxTemperature: 'max_temperature',
      lastConsult: new Date().getTime(),
      cityId: 'city_id'
    };
    const { sut } = makeSut();

    expect(async () => await sut.updateConsult(wrongParams))
      .rejects
      .toThrow(new EmptyFieldError('params.minTemperature'));
  });
  it('should throws a EmptyFieldError if params.actualTemperature is empty in updateConsult method', async () => {
    const wrongParams = {
      city: 'any_city',
      actualTemperature: '',
      minTemperature: 'min_temperature',
      maxTemperature: 'max_temperature',
      lastConsult: new Date().getTime(),
      cityId: 'city_id'
    };
    const { sut } = makeSut();

    expect(async () => await sut.updateConsult(wrongParams))
      .rejects
      .toThrow(new EmptyFieldError('params.actualTemperature'));
  });
  it('should throws a EmptyFieldError if params.cityId is empty in updateConsult method', async () => {
    const wrongParams = {
      city: 'any_city',
      actualTemperature: 'actual_temperature',
      minTemperature: 'min_temperature',
      maxTemperature: 'max_temperature',
      lastConsult: new Date().getTime(),
      cityId: ''
    };
    const { sut } = makeSut();

    expect(async () => await sut.updateConsult(wrongParams))
      .rejects
      .toThrow(new EmptyFieldError('params.cityId'));
  });

  it('should query method receive correct params in updateConsult method', async () => {
    const { sut } = makeSut();

    await sut.updateConsult(params);

    expect(firestore.query).toBeCalledWith('fakeCollection', 'fakeWhere');
  });
  it('should doc method receive correct params in updateConsult method', async () => {
    const { sut } = makeSut();

    await sut.updateConsult(params);

    expect(firestore.doc).toBeCalledWith('fakeDB', 'consult', 'fakeIdFromFakeDoc');
  });

  it('should updateDoc method receive correct params in updateConsult method', async () => {
    const { sut } = makeSut();

    await sut.updateConsult(params);

    expect(firestore.updateDoc).toBeCalledWith('fakeDoc', params);
  });
  it('should throws a EmptyFiledError if cityId is empty in findConsultById method', async () => {
    const { sut } = makeSut();

    expect(async () => await sut.findConsultById(''))
      .rejects
      .toThrow(new EmptyFieldError('cityId'));
  });
  it('should query method be receive correct params in findConsultById method', async () => {
    const { sut } = makeSut();

    await sut.findConsultById('cityId');

    expect(firestore.query).toBeCalledWith('fakeCollection', 'fakeWhere');
  });
  it('should getDocs method be receive correct params in findConsultById method', async () => {
    const { sut } = makeSut();

    await sut.findConsultById('cityId');

    expect(firestore.getDocs).toBeCalledWith('fakeQuery');
  });
  it('should getDocs method be receive correct params in findConsultById method', async () => {
    const { sut } = makeSut();

    const result = await sut.findConsultById('cityId');

    expect(result).toBe('fakeWeatherStoreParams');
  });
});
