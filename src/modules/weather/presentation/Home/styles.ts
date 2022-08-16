import styled from 'styled-components';

type ButtonProps = {
    isSelected:boolean;
}

export const Container = styled.div``;

export const Title = styled.h1`
    font-family: ${({ theme }) => theme.fonts.title};
    font-size: 60px;
    color: ${({ theme }) => theme.colors.textPrimary};


`;

export const SubTitle = styled.h1`
font-family: ${({ theme }) => theme.fonts.normal};
    font-size: 26px;
    color: ${({ theme }) => theme.colors.textPrimary};
    font-weight: 200;
`;
export const SelectWeatherButton = styled.button<ButtonProps>`

background: ${({ isSelected }) => isSelected ? '#fafafa' : 'transparent'};;
color: ${({ theme, isSelected }) => theme.colors.textSecondary};
filter:${({ isSelected }) => isSelected ? 'brightness(0.95)' : 'brightness(1)'};
font-size: 22px;
font-weight:150px;
width: 150px;
height: 40px;
border: 0px;
border-radius:2px;
margin-top:10px;
font-family: ${({ theme }) => theme.fonts.normal};
font-size:16px;


transition: 0.5s;
cursor: pointer;
&:hover {
    filter: brightness(0.95);
    background: #fafafa;
}


`;

export const Header = styled.div`
    //background: ${({ theme }) => theme.colors.backgroundSecondary};
    background-image:url('https://wallpaperaccess.com/full/2860353.jpg');
    width:100%;
    flex-direction:column;
    padding: 0px 0px;

`;
export const TitleContainer = styled.div`
     margin:0 auto;
     display: flex;
     flex-direction:column;
     align-items:center;
     backdrop-filter: blur(60px);
     padding:30px;
     border-radius:7px;
`;
export const SelectWeatherButtonContainer = styled.div`
    display:flex;
    align-items:center;
    flex-wrap:wrap;
    justify-content:space-around;
    width:800px;
    margin: 0 auto;
    max-width:100%;

`;
export const Card = styled.div`

    width:1000px;
    margin: 0 auto;
    max-width:100%;
    background: ${({ theme }) => theme.colors.backgroundPrimary};
    border-radius:2px;


`;
