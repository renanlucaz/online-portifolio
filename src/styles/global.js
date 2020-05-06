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
