import React from 'react';
import { WeatherView } from '../WeatherView';
import * as Component from './styles';
import { useHome } from './useHome';
import { BsArrowRight } from 'react-icons/bs';
export function Home () {
  const {
    changeCityWeather,
    isCitySelected,
    weather,
    cities
  } = useHome();

  return (
        <Component.Container>

            <Component.Card>
            <Component.SelectWeatherButtonContainer>

            {cities.map(x => (
            <Component.SelectWeatherButton
            onClick={() => changeCityWeather(x)}
            isSelected={isCitySelected(x)}
            key={x.name}>
                {x.name}
            </Component.SelectWeatherButton>

            ))}

            </Component.SelectWeatherButtonContainer>
            {weather && (

            <WeatherView
            actualTemperature={weather?.actualTemperature}
            city={weather?.city}
            image=''
            maxTemperature={weather?.maxTemperature}
            minTemperature={weather?.minTemperature}
           />
            )}
            <Component.NavContainer>
             <Component.NavItem to="/ranking">
            <Component.NavText>
                 ranking
            </Component.NavText>
            <BsArrowRight/>
             </Component.NavItem>
            </Component.NavContainer>
            </Component.Card>

        </Component.Container>
  );
};
