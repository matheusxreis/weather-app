import React, { useEffect, useState } from 'react';
import { GetWeatherInfoUseCase } from '../../data/useCases/getWeatherInfoUseCase';
import { Weather } from '../../domain/entities/weather';
import { AxiosRepository } from '../../infra/axiosRepository';
import * as Component from './styles';

export function Home () {
  const [weather, setWeather] = useState<Weather>({} as Weather);
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

  useEffect(() => {
    getWeatherInfo();
  }, []);

  return (
        <Component.Container>
            <h1> Clima </h1>
            <p> </p>
            <p> </p>
            <p> </p>
            <p> </p>
        </Component.Container>
  );
}
