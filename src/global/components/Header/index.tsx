import React from 'react';
import * as Component from './styles';
import { BsCloudSunFill as WeatherIcon } from 'react-icons/bs';
import { useTheme } from 'styled-components';

export function Header () {
  return (
    <Component.Container>
        <Component.TitleContainer>
        <Component.Title> Weather App </Component.Title>
        <Component.SubTitle>
            veja o clima pelo mundo {'   '}

        <WeatherIcon
                size={30}
                color={useTheme().colors.textPrimary} />
        </Component.SubTitle>
        </Component.TitleContainer>

  </Component.Container>
  );
}
