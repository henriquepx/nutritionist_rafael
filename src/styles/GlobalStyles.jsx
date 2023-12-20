import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        --font: 'Montserrat', sans-serif;
    }

    * {
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
        font-size: 100%;
        font: inherit;
        scroll-behavior: smooth;
        vertical-align: baseline;
        list-style: none;
        text-decoration: none;
        line-height: 1.2;
        font-family: 'Montserrat', sans-serif;
        ::-webkit-scrollbar {
            width: 10px; 
        }
        ::-webkit-scrollbar-thumb {
            background-color: #797979;
        }
        ::-webkit-scrollbar-track {
            background-color: #ffffff; 
        }
    }

    body {
        background-color: #ffffff;
    }
  
`;

export default GlobalStyle;