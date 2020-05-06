import styled from 'styled-components';

export const Header = styled.header`
    background: rgb(194, 12, 29);
    background: linear-gradient(
        180deg,
        rgb(220, 15, 34) 0%,
        rgb(134, 9, 21) 80%
    );
    grid-area: header;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
    margin-right: 15px;
    display: flex;
    justify-content: center;

    nav {
        display: flex;
        flex-direction: column;

        a {
            text-align: center;
            margin-top: 50px;
            font-size: 25px;
            color: #e0e0e0;
        }

        a:hover {
        }

        a.current {
            font-weight: bold;
            color: #ededed;
        }
    }

    @media (max-width: 770px) {
        margin: 0px;
        nav {
            flex-direction: row;
            justify-content: space-evenly;
        }

        nav a {
            margin: 0px;
            font-size: 14px;
            padding: 20px;
        }

        nav a + a {
        }
    }
`;
