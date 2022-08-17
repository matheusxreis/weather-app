import { Weather } from '../../../modules/weather/domain/entities/weather';
import { weatherTypes } from './types';

export function updateWeather (weather: Weather) {
  return {
    type: weatherTypes.updteWeatherList,
    payload: { weather }
  };
}
