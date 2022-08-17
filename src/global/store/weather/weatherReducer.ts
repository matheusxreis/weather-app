import { AnyAction } from 'redux';
import { weatherTypes } from './types';

const initialState = [] as any;
export function weatherReducer (state = initialState, action: AnyAction) {
  switch (action.type) {
    case weatherTypes.updteWeatherList:
      // eslint-disable-next-line no-case-declarations
      const { weather } = action.payload;
      // eslint-disable-next-line no-case-declarations
      const isOnState = state.find((x:any) => x.cityId === weather.cityId);
      if (isOnState) {
        return [...state.map((x:any) => {
          if (weather.cityId === x.cityId) {
            return weather;
          }
          return x;
        })];
      } else {
        return [...state, weather];
      }
    default:
      return state;
  }
}
