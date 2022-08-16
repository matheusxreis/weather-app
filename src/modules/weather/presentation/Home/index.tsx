import React, { useEffect, useState } from 'react';
import { GetWeatherInfoUseCase } from '../../data/useCases/getWeatherInfoUseCase';
import { Weather } from '../../domain/entities/weather';
import { AxiosRepository } from '../../infra/axiosRepository';
import { WeatherView } from '../WeatherView';
import * as Component from './styles';
import { BsCloudSunFill as WeatherIcon } from 'react-icons/bs';
import { useTheme } from 'styled-components';

type CityType = {
name:string,
lat:string,
lon:string
}
export function Home () {
  const [weather, setWeather] = useState<Weather>({} as Weather);
  const [actualCity, setActualCity] = useState<CityType>({ name: 'São Paulo', lon: '1122', lat: '11212' });

  const cities: CityType[] = [
    { name: 'São Paulo', lon: '1122', lat: '11212' },
    { name: 'Nova York', lon: '1122', lat: '11212' },
    { name: 'Tokyo', lon: '1122', lat: '11212' },
    { name: 'Londres', lon: '1122', lat: '11212' },
    { name: 'Amsterdam', lon: '1122', lat: '11212' }

  ];

  const getWeather = () => {
    const r = new AxiosRepository();
    const getWeatherUseCase = new GetWeatherInfoUseCase(r);
    return getWeatherUseCase;
  };

  async function getWeatherInfo () {
    try {
      await getWeather().execute({ latitute: '12', longitude: '122' });
    } catch {}
  }

  function changeCityWeather (city:CityType) {
    setActualCity(city);
  }
  function isCitySelected (city: CityType) {
    return city.name === actualCity.name;
  }

  useEffect(() => {
    getWeatherInfo();
  }, []);

  return (
        <Component.Container>
            <Component.Header>
                <Component.TitleContainer>
                <Component.Title> Weather App </Component.Title>
                <Component.SubTitle> Veja o clima pelo mundo. </Component.SubTitle>
                </Component.TitleContainer>
            </Component.Header>
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
             <WeatherIcon
                size={30}
                color={useTheme().colors.textSecondary} />

            </Component.SelectWeatherButtonContainer>
            <WeatherView
            actualTemperature='25'
            city='São Paulo'
            image=''
            maxTemperature='29'
            minTemparature='19'
        />
            </Component.Card>

        </Component.Container>
  );
}
