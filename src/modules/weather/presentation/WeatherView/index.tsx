import React from 'react';
import * as Component from './styles';
import { BsThermometerSun as ActualIcon } from 'react-icons/bs';
import { useTheme } from 'styled-components';
import SunImage from '../../../../global/assets/png/sun-image.png';
import CloudImage from '../../../../global/assets/png/cloud-image.png';

type WeatherViewProps = {
    actualTemperature: string,
    minTemperature:string,
    maxTemperature:string,
    image: string,
    city:string
}

export function WeatherView ({
  actualTemperature,
  minTemperature,
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
  function getImage () {
    if (Number(actualTemperature) > 24) { return SunImage; }
    return CloudImage;
  }

  return (
        <Component.Container>
            <Component.DataWeatherContainer>
            <Component.TimeNowIn>Tempo agora em: <span>{city}</span>. </Component.TimeNowIn>
             <Component.PharagraphContainer>
             <ActualIcon color={useTheme().colors.textSecondary} size={24}/>
            <Component.Pharagraph>
                 Temperatura atual:
            </Component.Pharagraph>
            <Component.PharagraphWeatherValue>
                 {actualTemperature} °C.
            </Component.PharagraphWeatherValue>
             </Component.PharagraphContainer>
             <Component.PharagraphContainer>
             <Component.Pharagraph>
                 Temperatura mínima:  <span> {minTemperature} °C</span>.
                  </Component.Pharagraph>
             </Component.PharagraphContainer>
             <Component.PharagraphContainer>
            <Component.Pharagraph> Temperatura máxima: <span> {maxTemperature} °C</span>. </Component.Pharagraph>
             </Component.PharagraphContainer>
            <Component.TemperatureLabel isSun={isSun()}>
                    <Component.Pharagraph> {getTextLabel()} </Component.Pharagraph>
            </Component.TemperatureLabel>

            </Component.DataWeatherContainer>
            <Component.Image src={getImage()}/>

        </Component.Container>
  );
}
