import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import RobotoRegularWoff2 from '../fonts/roboto-v30-cyrillic_latin-regular.woff2';
import RobotoItalicWoff2 from '../fonts/roboto-v30-cyrillic_latin-italic.woff2';
import Roboto700Woff2 from '../fonts/roboto-v30-cyrillic_latin-700.woff2';
import Roboto900Woff2 from '../fonts/roboto-v30-cyrillic_latin-900.woff2';
import fonts from './fonts';
import colors from './colors';
import viewports from './viewports';

const GlobalStyle = createGlobalStyle`
    ${normalize}

    html {
        scroll-behavior: smooth;
        font-size: 16px;

        @media ${viewports.mobile} {
            font-size: 12px;
        }

        @-moz-document url-prefix() {
            scrollbar-color: ${colors.scrollbarThumb} ${colors.scrollbarTrack};
            scrollbar-width: thin;
        }

        ::-webkit-scrollbar {
            width: 10px;
            height: 10px;
        }

        ::-webkit-scrollbar-thumb {
            background-color: ${colors.scrollbarThumb};
            border: 1px solid ${colors.scrollbarTrack};
        }

        ::-webkit-scrollbar-track {
            background: ${colors.scrollbarTrack};
        }

        ::-webkit-scrollbar-thumb:hover {
            background: ${colors.scrollbarThumbHover};
        }
    }

    *, *::after, *::before {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        background-color: #2C2C2C;
        color: #E4E4E4;
        font-family: ${fonts.mainFont};
    }

    #root {
        min-height: 100vh;
        display: grid;
        grid-template-rows: auto 1fr auto;
    }

    @font-face {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src:
        url(${RobotoRegularWoff2}) format("woff2"),
    }
    
    @font-face {
        font-family: "Roboto";
        font-style: italic;
        font-weight: 400;
        font-display: swap;
        src:
        url(${RobotoItalicWoff2}) format("woff2"),
    }

    @font-face {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src:
        url(${Roboto700Woff2}) format("woff2"),
    }

    @font-face {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 900;
        font-display: swap;
        src:
        url(${Roboto900Woff2}) format("woff2"),
    }
`;

export default GlobalStyle;
