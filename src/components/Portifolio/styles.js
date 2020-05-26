import styled from 'styled-components';
import metrics from '../../styles/metrics';
// import colors from '../../styles/colors';

export const Container = styled.section`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h1`
    text-align: center;
    color: white;
    font-size: 40px;

    @media (max-width: 770px) {
        font-size: 30px;
    }
`;

export const Description = styled.p`
    text-align: center;
    font-size: 20px;
    margin-top: 15px;
    color: white;

    @media (max-width: 770px) {
        font-size: 20px;
        margin-bottom: -60px;
    }
`;

export const Galerry = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: auto;
    margin-top: 30px;
    width: 100%;
    max-width: ${metrics.pageWidth};

    @media (max-width: 770px) {
        margin-top: 80px;
    }
`;

export const GalerryItem = styled.div`
    flex: 0 0 calc(33.33% - 10px);
    max-width: calc(33.33% - 10px);
    margin: auto;
    margin-bottom: 16px;
    position: relative;

    &:hover {
        cursor: pointer;

        img {
            opacity: 0.3;
            background-color: black;
        }
        h3 {
            opacity: 1;
        }
    }

    @media (max-width: 770px) {
        flex: 0 0 50%;
        max-width: 50%;
        padding: 8px;
    }

    @media (max-width: 530px) {
        flex: 0 0 100%;
        max-width: 100%;
    }

    h3 {
        font-size: 18px;
        font-weight: bold;
        color: white;
        position: absolute;
        margin: auto;
        top: 10%;
        margin: 0 5px;
        text-align: center;
        opacity: 0;
        transition: all 0.4s;
    }
`;

export const Image = styled.img`
    width: 100%;
    background-color: black;
    border-radius: 5px;
    transition: all 0.4s;
`;
