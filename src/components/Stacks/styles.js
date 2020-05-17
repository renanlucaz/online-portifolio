import styled from 'styled-components';
import colors from '../../styles/colors';
import metrics from '../../styles/metrics';

export const Container = styled.div`
    display: flex;
    flex: 1;
    width: 100%;
    max-width: ${metrics.pageWidth};
    margin: auto;
    justify-content: space-between;

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
    max-width: 30%;
    align-items: center;
    flex-direction: column;

    hr {
        width: 100px;
        border: 0.7px solid ${colors.lightDark};
        margin-top: 20px;
    }

    @media (max-width: 770px) {
        max-width: 50%;
        margin-bottom: 40px;
        margin: auto;

        + div {
            margin-bottom: 60px;
        }
    }

    @media (max-width: 650px) {
        max-width: 100%;
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
