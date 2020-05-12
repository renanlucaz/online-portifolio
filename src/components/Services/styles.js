import styled from 'styled-components';
import colors from '../../styles/colors';

export const ServicesSection = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 50px;
    background-color: ${colors.transparent};
    padding: 40px;
    box-shadow: 5px 0px 10px ${colors.transparent};

    @media (max-width: 770px) {
        padding: 10px;
        padding-top: 40px;
    }
`;

export const PageTitle = styled.h1`
    text-align: center;
    margin-bottom: 50px;
    color: ${colors.light};
    font-size: 40px;
    text-shadow: 1px 1px 1px black;

    @media (max-width: 770px) {
        font-size: 30px;
        margin-bottom: 20px;
    }
`;
