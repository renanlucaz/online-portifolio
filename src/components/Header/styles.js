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
        width: 180px;
        display: flex;
        flex-direction: column;
        padding-left: 10px;

        a {
            text-align: right;
            text-transform: uppercase;
            letter-spacing: 4px;
            font-weight: bold;
            margin-top: 50px;
            font-size: 18px;
            color: rgb(228, 131, 140);
            width: 20px;
            line-height: 50px;
            border-bottom: 2px solid white;
            transition: all ease 0.2s;
        }

        a:hover {
            a.current {
                width: 20px;
            }

            width: 50px;
            color: white;
        }

        a.current {
            color: white;
            width: 50px;
        }
    }

    @media (max-width: 770px) {
        margin: 0px;
        nav {
            flex-direction: row;
            justify-content: space-evenly;
            padding: 14px;
        }

        nav a {
            border: none;
            margin: 0px;
            letter-spacing: 1px;
            line-height: 20px;
            font-size: 10px;
            width: auto;
            color: #e0e0e0;
        }

        nav a + a {
            margin-left: 12px;
        }
    }
`;
