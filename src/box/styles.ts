import styled from 'styled-components';

export const Container = styled.div`
    width:200px;
    height:150px;
    background:${({ theme }) => theme.colors.primary};

`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.textPrimary};

`;
