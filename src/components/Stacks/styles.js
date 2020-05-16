import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
    display: flex;
    flex: 1;
    justify-content: space-evenly;

    svg {
        color: ${colors.mediumDark};
        font-size: 120px;
        margin-top: 30px;
    }

    @media (max-width: 770px) {
        flex-direction: column;
    }
`;

export const Content = styled.div`
    display: flex;
    max-width: 25%;
    align-items: center;
    flex-direction: column;

    hr {
        width: 100px;
        border: 0.7px solid ${colors.lightDark};
        margin-top: 20px;
    }

    @media (max-width: 770px) {
        max-width: 100%;
        margin-bottom: 40px;

        + div {
            margin-bottom: 60px;
        }
    }
`;

export const Title = styled.h2`
    text-align: center;
    font-size: 25px;
    color: ${colors.dark};
    font-weight: bold;
`;

export const Description = styled.p`
    font-size: 18px;
    text-align: center;
    color: ${colors.lightDark};
`;
