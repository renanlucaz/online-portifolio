import styled from 'styled-components';

export const MainArea = styled.main`
    section.main {
        display: flex;
        width: 100%;
        flex-direction: row;
        justify-content: space-evenly;
        padding-top: 20px;
        margin-top: 40px;
    }
    div.profile img {
        border-radius: 50%;
        width: 300px;
        margin-top: 80px;
    }

    a + a {
        margin-left: 10px;
    }

    @media (max-width: 770px) {
        section.main {
            flex-direction: column-reverse;
            text-align: center;
            margin-top: 60px;
        }

        section.main .content {
            margin-right: 0px;
        }

        div.content {
            padding: 1px;
            margin-bottom: 40px;
        }

        div.profile img {
            margin-top: 0px;
            width: 110px;
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
