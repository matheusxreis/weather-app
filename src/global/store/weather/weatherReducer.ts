import { AnyAction } from 'redux';
import { weatherTypes } from './types';

const initialState = {
  maxTemperature: {} as any,
  minTemperature: {} as any
};
export function weatherReducer (state = initialState, action: AnyAction) {
  switch (action.type) {
    case weatherTypes.updateMax:
      return {
        ...state,
        maxTemperature: action.payload.weather
      };
    case weatherTypes.updateMin:
      return {
        ...state,
        minTemperature: action.payload.weather
      };
    default:
      return state;
  }
}
