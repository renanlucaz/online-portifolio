import styled from 'styled-components';

export const MainArea = styled.main`
    display: flex;
    justify-content: space-evenly;
    padding-top: 20px;
    grid-area: main;
    margin-left: 10px;

    h1 {
        color: white;
        padding-top: 100px;
        font-size: 35px;
    }

    span {
        font-weight: 400;
        font-size: 30px;
        color: #ededed;
    }

    div.profile img {
        border-radius: 50%;
        width: 300px;
        margin-top: 80px;
    }

    p {
        margin-top: 20px;
        margin-bottom: 40px;
        font-size: 17px;
        color: #a9a9a9;
    }

    a {
        font-weight: bold;
        padding: 12px;
        border-radius: 25px;
        color: #ededed;
        background-color: #c20c1d;
        transition: 0.2s;
    }

    a:hover {
        background-color: #ce323a;
    }

    a.outline {
        background-color: rgba(0, 0, 0, 0);
        border: 2px solid #c20c1d;
        color: #c20c1d;
        font-weight: bold;
    }

    a.outline:hover {
        background-color: #c20c1d;
        color: white;
    }

    a + a {
        margin-left: 10px;
    }

    @media (max-width: 770px) {
        flex-direction: column-reverse;
        text-align: center;

        margin-left: 0px;

        div.content {
            padding: 1px;
            margin-bottom: 40px;
        }

        div.profile img {
            margin-top: 10px;
            width: 150px;
        }

        h1 {
            text-align: center;
            padding: 0px;
            font-size: 24px;
            margin-top: 10px;
        }

        h1 span {
            font-size: 20px;
        }

        p {
            font-size: 15px;
            text-align: center;
        }
    }
`;

export const Footer = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px;
    background-color: #080808;
    opacity: 0.8;
    grid-area: footer;

    svg {
        box-sizing: content-box;
        color: #ce323a;
        padding: 20px;
        margin: 20px 20px;
        background-color: #101010;
        border-radius: 50%;
        transition: 0.2s;
    }

    svg:hover {
        transform: translateY(-2px);
        color: #dd6163;
    }

    p {
        color: white;
        margin-bottom: 10px;
    }

    @media (max-width: 770px) {
        padding: 10px;
        margin-top: 20px;

        svg {
            padding: 10px;
        }
    }
`;
