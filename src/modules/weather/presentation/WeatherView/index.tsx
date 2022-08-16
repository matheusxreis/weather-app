import React from 'react';
import * as Component from './styles';
import { BsFillSunriseFill as MaxIcon, BsFillSunsetFill as MinIcon, BsSunFill, BsThermometerSun as ActualIcon } from 'react-icons/bs';
import { useTheme } from 'styled-components';

type WeatherViewProps = {
    actualTemperature: string,
    minTemparature:string,
    maxTemperature:string,
    image: string,
    city:string
}

export function WeatherView ({
  actualTemperature,
  minTemparature,
  maxTemperature,
  image,
  city
}: WeatherViewProps) {
  function isSun () {
    if (Number(actualTemperature) > 24) { return true; }
    return false;
  }
  function getTextLabel () {
    if (Number(actualTemperature) > 24) { return 'Wow! Acho que dá pra aproveitar!'; }
    return 'Que clima, hein !?';
  }

  return (
        <Component.Container>
            <Component.DataWeatherContainer>
            <Component.TimeNowIn>Tempo agora em: {city}. </Component.TimeNowIn>
             <Component.PharagraphContainer>
             <ActualIcon size={24}/>
            <Component.Pharagraph>
                 Temperatura atual: {actualTemperature} °C.
            </Component.Pharagraph>
             </Component.PharagraphContainer>
             <Component.PharagraphContainer>
             <MaxIcon size={24} />
             <Component.Pharagraph>
                 Temperatura mínima: {minTemparature} °C.
                  </Component.Pharagraph>
             </Component.PharagraphContainer>
             <Component.PharagraphContainer>
             <MinIcon size={24}/>
            <Component.Pharagraph> Temperatura máxima: {maxTemperature} °C. </Component.Pharagraph>
             </Component.PharagraphContainer>
            <Component.TemperatureLabel isSun={isSun()}>
                    <Component.Pharagraph> {getTextLabel()} </Component.Pharagraph>
            </Component.TemperatureLabel>
            </Component.DataWeatherContainer>

        </Component.Container>
  );
}
