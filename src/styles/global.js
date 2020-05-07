import { createGlobalStyle } from 'styled-components';

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
        background-image: url('https://i.ibb.co/kxcQhTh/background.jpg');
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
        background-position: top;
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
        background-color: #CE323A;
        border-radius: 10px;
    }

    /* Cor do indicador de rolagem - ao passar o mouse */
    ::-webkit-scrollbar-thumb:vertical:hover,
    ::-webkit-scrollbar-thumb:horizontal:hover {
        background-color: #C20C1D
    }

    @media (max-width: 770px) {
        * {
            margin: 0px;
            padding: 0px;
        }

        body {
            background-position: center;
        }
    }
`;
