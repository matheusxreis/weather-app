import { Link } from 'react-router-dom';
import styled from 'styled-components';

type ButtonProps = {
    isSelected:boolean;
}

export const Container = styled.div`
//background: ${({ theme }) => theme.colors.backgroundSecondary};
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
    font-weight: 200;
`;
export const SelectWeatherButton = styled.button<ButtonProps>`
background: ${({ isSelected, theme }) => isSelected ? 'transparent' : 'transparent'};;
color: ${({ theme, isSelected }) => theme.colors.textSecondary};
font-size: 22px;
font-weight:150px;
width: 150px;
height: 40px;
border: 0px;
border-radius:2px;
font-family: ${({ theme }) => theme.fonts.normal};
font-size:16px;
text-decoration: ${({ isSelected }) => isSelected ? 'underline' : 'none'};
padding:2px;

transition: 0.5s;
cursor: pointer;
transition: 0.5s;
&:hover {
    text-decoration: 'underline';
    color: #000;

    //background: ${({ theme }) => theme.colors.primary};

}


`;

export const SelectWeatherButtonContainer = styled.div`
    display:flex;
    align-items:center;
    flex-wrap:wrap;
    justify-content:space-around;
    width:800px;
    margin: 0 auto;
    max-width:100%;
    background: 'transparent';

`;
export const Card = styled.div`

    width:1000px;
    margin: 0 auto;
    max-width:100%;
    backdrop-filter: blur(300px);
    //background: ${({ theme }) => theme.colors.backgroundSecondary};
    border-radius:5px;
    filter: brightness(0.95);
    margin-top:10px;



`;

export const NavContainer = styled.div`

display:flex;
align-items:center;
width:100%;
justify-content:flex-end;
`;

export const NavText = styled.p`

font-size: 16px;
color:${({ theme }) => theme.colors.textSecondary};
font-family: ${({ theme }) => theme.fonts.normal};
cursor:pointer;

transition: 0.5s;
&:hover {
    color: ${({ theme }) => theme.colors.primary};;
}


`;

export const NavItem = styled(Link)`

    display:flex;
    align-items:center;
    transition: 0.5s;
    padding: 5px 24px;
    color: ${({ theme }) => theme.colors.textSecondary};
    text-decoration: none;

&:hover {
    color: ${({ theme }) => theme.colors.primary};;
    }



`;
