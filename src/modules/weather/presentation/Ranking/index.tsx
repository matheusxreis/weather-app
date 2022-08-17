import React from 'react';
import { BsArrowRight, BsSnow2 } from 'react-icons/bs';
import { FaHotjar } from 'react-icons/fa';
import * as Component from './styles';
import { useRanking } from './useRanking';

export function Ranking () {
  const { orderState, w } = useRanking();
  return (
        <Component.Container>
            <Component.FlexContainer>
            <Component.Card>
            <Component.Title> <BsSnow2 /> O lugar mais frio: </Component.Title>
                <Component.Text> {orderState()[0]?.city} com {orderState()[0]?.minTemperature} graus celsius! </Component.Text>
            </Component.Card>
            <Component.Card>

            <Component.Title>   <FaHotjar /> O lugar mais quente: </Component.Title>
            <Component.Text> {orderState()[w.length - 1]?.city} com {orderState()[w.length - 1]?.maxTemperature} graus celsius!  </Component.Text>

            </Component.Card>

            <Component.ContainerNav>
            <Component.NavContainer>
             <Component.NavItem to="/">
            <Component.NavText>
                 home
            </Component.NavText>
            <BsArrowRight/>
             </Component.NavItem>
            </Component.NavContainer>

            </Component.ContainerNav>
            </Component.FlexContainer>
        </Component.Container>
  );
}
