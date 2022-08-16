import React from 'react';
import * as Component from './styles';

export function Header () {
  return (
    <Component.Container>
        <Component.TitleContainer>
        <Component.Title> Weather App </Component.Title>
        <Component.SubTitle> Veja o clima pelo mundo. </Component.SubTitle>
        </Component.TitleContainer>
  </Component.Container>
  );
}
