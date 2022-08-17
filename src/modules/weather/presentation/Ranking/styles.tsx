import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`



`;

export const Card = styled.div`
backdrop-filter: blur(300px);
width:350px;
max-width:100%;
border-radius:4px;
padding:5px 15px;
margin-top:10px;

`;

export const ContainerNav = styled.div`
width:450px;
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
