import { createGlobalStyle } from 'styled-components';
import BackgroundImage from '../assets/jpg/background-image.jpg';
export const GlobalStyle = createGlobalStyle`
 body {

  //background: ${({ theme }) => theme.colors.backgroundSecondary};
    background-image: url('${BackgroundImage}');
    background-position:end;

*{  margin: 0px;
    padding: 0px;
}
`;
