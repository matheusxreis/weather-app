import { useEffect, useState } from 'react';
import { GetWeatherInfoUseCase } from '../../data/useCases/getWeatherInfoUseCase';
import { Weather } from '../../domain/entities/weather';
import { AxiosRepository } from '../../infra/axiosRepository';
import { FirebaseRepository } from '../../infra/firebaseRepository';
import { StoreWeatherUseCase } from '../../data/useCases/storeWeatherUseCase';
import { StoreLogUseCase } from '../../data/useCases/storeLogUseCase';
import { useDispatch } from 'react-redux';
import { updateWeather } from '../../../../global/store/weather/actions';
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '../../infra/helpers/firebaseConfig';
import { collection } from 'firebase/firestore';

type CityType = {
    name:string,
    lat:string,
    lon:string,
    id:string
    }
const cities: CityType[] = [
  { name: 'São Paulo', lon: '-49.0', lat: '-22.0', id: '3448433' },
  { name: 'Nova York', lon: '-74.005966', lat: '40.714272', id: '5128581' },
  { name: 'Tokyo', lon: '139.691711', lat: '35.689499', id: '1850144' },
  { name: 'Paris', lon: '2.3486', lat: '48.853401', id: '2988507' },
  { name: 'Amsterdam', lon: '4.88969', lat: '52.374031', id: '2759794' }

];
const getWeather = () => {
  const r = new AxiosRepository();
  const getWeatherUseCase = new GetWeatherInfoUseCase(r);
  return getWeatherUseCase;
};

const saveWeather = () => {
  const r = new FirebaseRepository();
  const storeWeatherUseCase = new StoreWeatherUseCase(r);
  return storeWeatherUseCase;
};

const saveLogs = () => {
  const r = new FirebaseRepository();
  const storeLogsUseCase = new StoreLogUseCase(r);
  return storeLogsUseCase;
};

export function useHome () {
  const [weather, setWeather] = useState<Weather>({} as Weather);
  const [actualCity, setActualCity] = useState<CityType>(cities[0]);
  const dispatch = useDispatch();
  const [consultValues] = useCollection(
    collection(db, 'consult')
  );

  async function getWeatherInfo (lat:string, lon:string) {
    try {
      const response = await getWeather().execute({ latitute: lat, longitude: lon }).then(x => x);
      dispatch(updateWeather(response));
      if (!consultValues?.docs.length) { setWeather(response); }
      await saveWeather().execute(response);
      await saveLogs().execute(response);
    } catch (err) {
      console.log('err', err);
    }
  }

  async function changeCityWeather (city:CityType) {
    setActualCity(city);
    await getWeatherInfo(city.lat, city.lon);
  }
  function isCitySelected (city: CityType) {
    return city.name === actualCity.name;
  }
  useEffect(() => {
    getWeatherInfo(actualCity.lat, actualCity.lon);
  }, []);

  useEffect(() => {
    consultValues?.docs.forEach((x:any) => {
      if (x.data().cityId === actualCity.id) {
        setWeather(x.data() as Weather);
      }
    });
  }, [consultValues, actualCity]);

  return {
    changeCityWeather,
    isCitySelected,
    weather,
    cities
  };
}
