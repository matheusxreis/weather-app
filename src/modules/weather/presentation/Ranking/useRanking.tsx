
import { useSelector } from 'react-redux';
import { Weather } from '../../domain/entities/weather';

export function useRanking () {
  const w:Weather[] = useSelector((x:any) => x.weather);

  function orderState () {
    return w?.sort((a, b) => Number(a.maxTemperature) - Number(b.maxTemperature));
  }

  return {
    orderState,
    w
  };
}
