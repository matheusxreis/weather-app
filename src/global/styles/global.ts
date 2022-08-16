import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
 body {

  background: ${({ theme }) => theme.colors.backgroundSecondary};
 };
 * {
   padding: 0px;
   margin: 0px;
 }
`;
