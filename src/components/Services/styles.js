import styled from 'styled-components';
import colors from '../../styles/colors';

export const ServicesSection = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 50px;
    background-color: ${colors.light};
    padding: 40px;

    @media (max-width: 770px) {
        padding: 10px;
        padding-top: 40px;
    }
`;

export const PageTitle = styled.h1`
    text-align: center;
    padding-bottom: 3px;
    color: ${colors.dark};
    font-size: 40px;

    @media (max-width: 770px) {
        font-size: 30px;
        margin-bottom: 20px;
    }
`;
