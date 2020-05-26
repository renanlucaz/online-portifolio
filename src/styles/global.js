import { createGlobalStyle } from 'styled-components';
import colors from './colors';
import background from '../assets/background.jpg';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Jost', sans-serif;
    }

    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    html, body, #root {
        min-height: 100%;
    }

    body {
        -webkit-font-smoothing: antialiased !important;
        background-color: black;
        background: url(${background}) no-repeat center ;
        background-attachment: fixed;
        background-size: cover;
    }

    ::-webkit-scrollbar {
        width: 10px;

    }

    /* Fundo da barra de rolagem */
    ::-webkit-scrollbar-track-piece {
        background-color: #0C100C;
    }

    /* Cor do indicador de rolagem */
    ::-webkit-scrollbar-thumb:vertical,
    ::-webkit-scrollbar-thumb:horizontal {
        background-color: ${colors.primary};
        border-radius: 10px;
    }

    /* Cor do indicador de rolagem - ao passar o mouse */
    ::-webkit-scrollbar-thumb:vertical:hover,
    ::-webkit-scrollbar-thumb:horizontal:hover {
        background-color: ${colors.seccondary};
    }

    @media (max-width: 770px) {
        * {
            margin: 0px;
            padding: 0px;
        }
    }
`;
