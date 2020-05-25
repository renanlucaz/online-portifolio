import { Link } from 'react-scroll';
import styled from 'styled-components';
import colors from '../../styles/colors';

export const Header = styled.header`
    display: flex;
    width: 100%;
    justify-content: space-around;
    position: fixed;
    z-index: 3;
    padding: 10px;
    transition: all 0.4s;

    @media (max-width: 770px) {
        justify-content: center;
        padding-top: 15px;
    }

    &.active {
        background-color: ${colors.primary};
        padding: 20px;

        svg {
            color: ${colors.light};
            transition: all 0.3s;
        }

        svg:hover {
            transform: translateY(-2px);
        }
    }
`;

export const IconGroup = styled.div``;

export const Icon = styled.a`
    color: ${colors.primary};
    font-size: 36px;
    margin: 0px 20px;
    border-radius: 100%;
    transition: 0.5s;

    :hover {
        color: #47adde;
    }

    @media (max-width: 770px) {
        display: none;
        margin: 0px;
    }
`;

export const NavBar = styled.nav`
    display: flex;
    align-items: center;
`;

export const NavLink = styled(Link)`
    color: white;
    position: relative;
    font-size: 20px;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 2px;
    transition: all 0.3s;

    + a {
        margin-left: 30px;
    }

    ::after {
        content: '';
        display: block;
        width: 10px;
        height: 2px;
        background: #fff;
        transition: width 0.3s;
    }

    :hover:after {
        width: 40px;
    }

    @media (max-width: 1235px) {
        font-size: 12px;

        + a {
            margin-left: 15px;
        }

        :hover {
            color: #fff;
        }
        :hover:after {
            width: 20px;
        }
    }
`;
