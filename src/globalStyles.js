import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: 'Montserrat', 'sans-serif';
    }

    body {
        background-color: ${({theme}) => theme.background};
    }
`

export default GlobalStyles;