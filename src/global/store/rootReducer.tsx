import { AnyAction } from 'redux';
import { weatherReducer } from './weather/weatherReducer';

const initialState: any = { weather: [] as any };

export default function rootReducer (state = initialState, action: AnyAction) {
  return {
    weather: weatherReducer(state.weather, action)
  };
}
