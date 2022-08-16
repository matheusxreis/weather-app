import { iStoreLogRepository } from '../data/irepositories/istoreLogRepository';
import { iStoreWeatherRepository, WeatherStoreParams } from '../data/irepositories/iStoreWeatherRepository';
import { db } from './helpers/firebaseConfig';
import { doc, collection, addDoc, getDoc, where, query, getDocs } from 'firebase/firestore';

export class FirebaseRepository implements iStoreLogRepository, iStoreWeatherRepository {
  storeLog (params: WeatherStoreParams): Promise<void> {
    throw new Error('Method not implemented.');
  }

  async storeWeather (params: WeatherStoreParams): Promise<void> {
    const data = {
      actualTemperature: params.actualTemperature,
      minTemperature: params.minTemperature,
      maxTemperature: params.maxTemperature,
      city: params.city,
      cityId: params.cityId,
      photo: params.photo ? params.photo : null,
      lastConsult: params.lastConsult
    };
    const col = collection(db, 'consult');
    await addDoc(col, data);
  }

  async findConsultById (cityId: string): Promise<WeatherStoreParams | null> {
    const q = query(collection(db, 'consult'), where('cityId', '==', cityId));
    const querySnapshot = await getDocs(q);
    let city;
    querySnapshot.forEach((doc) => {
      console.log(doc.data(), 'data');
      city = doc.data();
    });
    console.log('item', city);
    return city as unknown as WeatherStoreParams;
  }

  async updateConsult (params: WeatherStoreParams): Promise<void> {
    // throw new Error('Method not implemented.');
  }
}
