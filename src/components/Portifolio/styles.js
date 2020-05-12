import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.section`
    grid-area: portifolio;
    max-width: 75%;
    margin: auto;
    margin-bottom: 50px;

    @media (max-width: 1235px) {
        width: 90%;
        margin-bottom: 10px;
    }
`;

export const Button = styled.a`
    cursor: pointer;
    text-align: center;
    width: 100%;
    padding: 20px;
    border-radius: 5px;
    background-color: ${colors.seccondary};
    color: #fff;
    transition: 0.2s;

    :hover {
        opacity: 0.8;
    }
`;

export const ButtonContainer = styled.div`
    margin-top: 60px;
    display: flex;
    flex: 1;

    @media (max-width: 770px) {
        margin-top: 20px;
    }
`;
