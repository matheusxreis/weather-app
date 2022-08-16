import React from 'react';
import * as Component from './styles';

export function Ranking () {
  return (
        <Component.Container>
            <Component.FlexContainer>
            <Component.Card>
            <Component.Title>O lugar mais frio: </Component.Title>
                <Component.Text> São Paulo com 12 graus celsius! </Component.Text>
            </Component.Card>
            <Component.Card>
            <Component.Title>O lugar mais quente: </Component.Title>
            <Component.Text> São Paulo com 12 graus celsius!  </Component.Text>

            </Component.Card>
            </Component.FlexContainer>
        </Component.Container>
  );
}
