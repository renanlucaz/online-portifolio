import styled from 'styled-components';
import colors from '../../styles/colors';

export const Header = styled.header`
    display: flex;
    padding: 20px;
    justify-content: space-around;

    @media (max-width: 770px) {
        justify-content: center;
    }

    svg {
        box-sizing: content-box;
        color: ${colors.primary};
        font-size: 36px;
        margin: 0px 20px;
        border-radius: 100%;
        transition: 0.2s;

        @media (max-width: 770px) {
            display: none;
            margin: 0px;
        }
    }

    svg:hover {
        color: #47adde;
    }

    nav {
        display: flex;
        align-items: center;

        a {
            color: white;
            position: relative;
            font-size: 20px;
            cursor: pointer;
            text-transform: uppercase;
            letter-spacing: 2px;
            transition: all 0.3s;
        }

        a::after {
            content: '';
            display: block;
            width: 10px;
            height: 2px;
            background: #fff;
            transition: width 0.3s;
        }
        a:hover {
            color: #98d8f7;
        }
        a:hover:after {
            width: 40px;
        }

        a + a {
            margin-left: 30px;
        }

        @media (max-width: 1235px) {
            a:hover {
                color: #fff;
            }
        }
    }

    @media (max-width: 1235px) {
        h1 {
            display: none;
        }
    }

    @media (max-width: 770px) {
        position: fixed;
        width: 100%;
        background-color: ${colors.primary};
        nav a {
            font-size: 10px;
        }

        nav a:hover {
            width: auto;
        }

        nav a + a {
            margin-left: 12px;
        }
    }
`;
