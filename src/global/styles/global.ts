import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
 body {

  //background: ${({ theme }) => theme.colors.backgroundSecondary};
  background-image: url('https://img.wallpapersafari.com/desktop/1920/1080/6/79/vbFBVl.jpg');
  background-position:center;
 };
 * {
   padding: 0px;
   margin: 0px;
 }
`;
