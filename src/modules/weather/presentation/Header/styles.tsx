import styled from 'styled-components';

export const Container = styled.div`
    //background: ${({ theme }) => theme.colors.backgroundSecondary};
    background-image:url('https://wallpaperaccess.com/full/2860353.jpg');
    width:100%;
    flex-direction:column;
    padding: 0px 0px;

`;

export const Title = styled.h1`
    font-family: ${({ theme }) => theme.fonts.title};
    font-size: 60px;
    color: ${({ theme }) => theme.colors.textPrimary};


`;

export const SubTitle = styled.h1`
font-family: ${({ theme }) => theme.fonts.normal};
    font-size: 26px;
    color: ${({ theme }) => theme.colors.textPrimary};
    font-weight: 200;`;

export const TitleContainer = styled.div`
     margin:0 auto;
     display: flex;
     flex-direction:column;
     align-items:center;
     backdrop-filter: blur(60px);
     padding:30px;
     border-radius:7px;
`;
