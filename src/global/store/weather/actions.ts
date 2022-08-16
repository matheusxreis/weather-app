import { Weather } from '../../../modules/weather/domain/entities/weather';
import { weatherTypes } from './types';

export function updateMaxWeather (weather: Weather) {
  console.log('wawa');
  return {
    type: weatherTypes.updateMax,
    payload: { weather }
  };
}

export function updateMinWeather (weather: Weather) {
  return {
    type: weatherTypes.updateMin,
    payload: { weather }
  };
}

export function updateWeather (weather: Weather) {
  console.log('wawa');
  return {
    type: weatherTypes.updteWeatherList,
    payload: { weather }
  };
}
