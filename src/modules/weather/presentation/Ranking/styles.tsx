import styled from 'styled-components';

export const Container = styled.div`



`;

export const Card = styled.div`
background: ${({ theme }) => theme.colors.backgroundSecondary};
width:350px;
max-width:100%;
border-radius:4px;
padding:5px 15px;
margin-top:10px;

`;

export const FlexContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
`;

export const Title = styled.p`

font-size:20px;
font-weight:200px;
font-family; ${({ theme }) => theme.fonts.normal};
color: ${({ theme }) => theme.colors.textSecondary};
`;

export const Text = styled.p`

font-size:16px;
font-weight:200px;
font-family; ${({ theme }) => theme.fonts.normal};
color: ${({ theme }) => theme.colors.textSecondary}
`;
