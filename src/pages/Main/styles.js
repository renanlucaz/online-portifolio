import styled from 'styled-components';

export const MainArea = styled.main`
    display: flex;
    justify-content: space-around;
    padding: 20px;
    background-color: #fafafa;
    grid-area: main;

    h1 {
        padding-top: 100px;
    }

    span {
        font-weight: 400;
        font-size: 30px;
    }

    p {
        margin-top: 20px;
        margin-bottom: 30px;
        font-size: 17px;
    }

    a {
        padding: 10px;
        color: white;
        background-color: #8c8c8c;
    }

    a + a {
        margin-left: 10px;
    }
`;

export const Footer = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px;
    background-color: #afafaf;
    grid-area: footer;

    svg {
        box-sizing: content-box;
        color: white;
        padding: 20px;
        margin: 20px 20px;
        background-color: gray;
        border-radius: 50%;
    }

    p {
        color: white;
    }
`;
