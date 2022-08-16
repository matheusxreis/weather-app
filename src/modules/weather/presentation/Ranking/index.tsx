import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Weather } from '../../domain/entities/weather';
import * as Component from './styles';

export function Ranking () {
  const w:Weather[] = useSelector((x:any) => x.weather);

  function OrderState () {
    return w?.sort((a, b) => Number(a.maxTemperature) - Number(b.maxTemperature));
  }

  useEffect(() => console.log('weather', OrderState()), [w]);

  return (
        <Component.Container>
            <Component.FlexContainer>
            <Component.Card>
            <Component.Title>O lugar mais frio: </Component.Title>
                <Component.Text> {OrderState()[0]?.city} com {OrderState()[0]?.minTemperature} graus celsius! </Component.Text>
            </Component.Card>
            <Component.Card>
            <Component.Title>O lugar mais quente: </Component.Title>
            <Component.Text> {OrderState()[w.length - 1]?.city} com {OrderState()[w.length - 1]?.maxTemperature} graus celsius!  </Component.Text>

            </Component.Card>
            </Component.FlexContainer>
        </Component.Container>
  );
}
