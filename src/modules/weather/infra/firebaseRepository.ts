import { iStoreLogRepository } from '../data/irepositories/istoreLogRepository';
import { iStoreWeatherRepository, WeatherStoreParams } from '../data/irepositories/iStoreWeatherRepository';
import { db } from './helpers/firebaseConfig';
import { doc, collection, addDoc, where, query, getDocs, updateDoc } from 'firebase/firestore';
import { EmptyFieldError } from '../../../global/errors/emptyFieldError';

export class FirebaseRepository implements iStoreLogRepository, iStoreWeatherRepository {
  async storeLog (params: WeatherStoreParams): Promise<void> {
    this.verifyParams(params);

    const data = {
      actualTemperature: params.actualTemperature,
      minTemperature: params.minTemperature,
      maxTemperature: params.maxTemperature,
      city: params.city,
      cityId: params.cityId,
      photo: params.photo ? params.photo : '',
      lastConsult: params.lastConsult
    };
    const col = collection(db, 'log');
    await addDoc(col, data);
  }

  async storeWeather (params: WeatherStoreParams): Promise<void> {
    this.verifyParams(params);

    const data = {
      actualTemperature: params.actualTemperature,
      minTemperature: params.minTemperature,
      maxTemperature: params.maxTemperature,
      city: params.city,
      cityId: params.cityId,
      photo: params.photo ? params.photo : '',
      lastConsult: params.lastConsult
    };
    const col = collection(db, 'consult');
    await addDoc(col, data);
  }

  async findConsultById (cityId: string): Promise<WeatherStoreParams | null> {
    if (!cityId) { throw new EmptyFieldError('cityId'); }
    const q = query(collection(db, 'consult'), where('cityId', '==', cityId));
    const querySnapshot = await getDocs(q);
    let city;

    querySnapshot.forEach((doc) => {
      city = doc.data();
    });
    return city as unknown as WeatherStoreParams;
  }

  async updateConsult (params: WeatherStoreParams): Promise<void> {
    this.verifyParams(params);

    const q = query(collection(db, 'consult'), where('cityId', '==', params.cityId));
    const querySnapshot = await getDocs(q);
    let id = '';
    querySnapshot.forEach((doc) => {
      id = doc.id;
    });

    const docRef = doc(db, 'consult', id);

    const data = {
      actualTemperature: params.actualTemperature,
      minTemperature: params.minTemperature,
      maxTemperature: params.maxTemperature,
      city: params.city,
      cityId: params.cityId,
      photo: params.photo ? params.photo : '',
      lastConsult: params.lastConsult
    };
    await updateDoc(docRef, data);
  }

  verifyParams (params: WeatherStoreParams) {
    if (!params.city) { throw new EmptyFieldError('params.city'); }
    if (!params.maxTemperature) { throw new EmptyFieldError('params.maxTemperature'); }
    if (!params.minTemperature) { throw new EmptyFieldError('params.minTemperature'); }
    if (!params.actualTemperature) { throw new EmptyFieldError('params.actualTemperature'); }
    if (!params.cityId) { throw new EmptyFieldError('params.cityId'); }
  }
}
