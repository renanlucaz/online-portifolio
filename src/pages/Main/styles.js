import styled from 'styled-components';

export const MainArea = styled.main`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    svg {
        font-size: 45px;
        color: #ce323a;
        margin-bottom: 20px;
    }

    section.main {
        display: flex;
        width: 100%;
        flex-direction: row;
        justify-content: space-evenly;
        padding-top: 20px;
        grid-area: main;
    }

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

    .main a {
        font-weight: bold;
        padding: 12px;
        border-radius: 25px;
        color: #ededed;
        background-color: #c20c1d;
        transition: 0.2s;
    }

    .main a:hover {
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
        section.main {
            flex-direction: column-reverse;
            text-align: center;
        }

        section.main .content {
            margin-right: 0px;
        }

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
