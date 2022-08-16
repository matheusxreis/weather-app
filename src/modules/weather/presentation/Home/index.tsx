import React, { useEffect, useState } from 'react';
import { GetWeatherInfoUseCase } from '../../data/useCases/getWeatherInfoUseCase';
import { Weather } from '../../domain/entities/weather';
import { AxiosRepository } from '../../infra/axiosRepository';
import { WeatherView } from '../WeatherView';
import * as Component from './styles';
import { useTheme } from 'styled-components';
import { FirebaseRepository } from '../../infra/firebaseRepository';
import { StoreWeatherUseCase } from '../../data/useCases/storeWeatherUseCase';
import { StoreLogUseCase } from '../../data/useCases/storeLogUseCase';

type CityType = {
name:string,
lat:string,
lon:string
}
const cities: CityType[] = [
  { name: 'São Paulo', lon: '-49.0', lat: '-22.0' },
  { name: 'Nova York', lon: '-74.005966', lat: '40.714272' },
  { name: 'Tokyo', lon: '139.691711', lat: '35.689499' },
  { name: 'Paris', lon: '2.3486', lat: '48.853401' },
  { name: 'Amsterdam', lon: '4.88969', lat: '52.374031' }

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

export function Home () {
  const [weather, setWeather] = useState<Weather>({} as Weather);
  const [actualCity, setActualCity] = useState<CityType>(cities[0]);

  async function getWeatherInfo (lat:string, lon:string) {
    try {
      const response = await getWeather().execute({ latitute: lat, longitude: lon }).then(x => x);
      setWeather(response);
      await saveWeather().execute(response);
      await saveLogs().execute(response);
    } catch (err) {
      console.log('err', err);
    }
  }

  async function changeCityWeather (city:CityType) {
    console.log(city);
    setActualCity(city);
    await getWeatherInfo(city.lat, city.lon);
  }
  function isCitySelected (city: CityType) {
    return city.name === actualCity.name;
  }

  useEffect(() => {
    getWeatherInfo(actualCity.lat, actualCity.lon);
  }, []);
  useEffect(() => { console.log(weather); }, [weather]);

  return (
        <Component.Container>

            <Component.Card>
            <Component.SelectWeatherButtonContainer>

            {cities.map(x => (
            <Component.SelectWeatherButton
            onClick={() => changeCityWeather(x)}
            isSelected={isCitySelected(x)}
            key={x.name}>
                {x.name}
            </Component.SelectWeatherButton>

            ))}


            </Component.SelectWeatherButtonContainer>
            <WeatherView
            actualTemperature={weather?.actualTemperature}
            city={weather?.city}
            image=''
            maxTemperature={weather?.maxTemperature}
            minTemparature={weather?.minTemperature}
        />
            </Component.Card>

        </Component.Container>
  );
};
