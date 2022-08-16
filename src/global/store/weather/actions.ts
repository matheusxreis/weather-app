import { Weather } from '../../../modules/weather/domain/entities/weather';
import { weatherTypes } from './types';

export function updateWeather (weather: Weather) {
  console.log('wawa');
  return {
    type: weatherTypes.updteWeatherList,
    payload: { weather }
  };
}
