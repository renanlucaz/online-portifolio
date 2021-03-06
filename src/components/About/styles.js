import styled from 'styled-components';
import { FaHeart } from 'react-icons/fa';
import colors from '../../styles/colors';
import metrics from '../../styles/metrics';

export const AboutContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: auto;
    width: 100%;
    max-width: ${metrics.pageWidth};

    @media (max-width: 770px) {
        flex-direction: column-reverse;
        justify-content: center;
    }
`;

export const Presentation = styled.div`
    display: flex;
    width: 50%;
    flex-direction: column;

    @media (max-width: 770px) {
        width: 100%;
    }
`;

export const Title = styled.h1`
    font-size: 46px;
    position: relative;

    span {
        color: ${colors.primary};
    }

    @media (max-width: 770px) {
        margin-top: 10px;
        text-align: center;
        font-size: 35px;
    }
`;

export const AboutImage = styled.img`
    height: 450px;

    @media (max-width: 770px) {
        height: auto;
        width: 100%;
    }
`;

export const Line = styled.hr`
    width: ${(props) => props.size};
    border: 1px solid ${colors.primary};
    margin-top: 7px;

    @media (max-width: 770px) {
        margin: auto;
    }
`;

export const TopText = styled.span`
    font-size: 30px;
    margin-top: 40px;
    color: ${colors.lightDark};

    @media (max-width: 770px) {
        margin-top: 20px;
        text-align: center;
    }
`;

export const Love = styled(FaHeart).attrs({
    size: 50,
})`
    color: ${colors.primary};
`;

export const CodeTitle = styled.strong`
    font-size: 65px;
    margin-left: 4px;
    color: ${colors.dark};

    @media (max-width: 770px) {
        text-align: center;
    }
`;

export const AboutDescription = styled.p`
    font-size: 17px;

    @media (max-width: 770px) {
        font-size: 15px;
        text-align: center;
    }
`;

export const InfoContainer = styled.div`
    display: flex;
    margin-top: 25px;

    @media (max-width: 770px) {
        flex-direction: column;
        margin: auto;
        margin-top: 25px;
    }
`;

export const Email = styled.span`
    position: relative;
    padding-bottom: 6px;

    &:before {
        content: '';
        width: 70px;
        height: 2px;
        background: ${colors.primary};
        position: absolute;
        bottom: 0;
    }
`;

export const Locale = styled.p`
    margin-left: 30px;
    position: relative;
    padding-bottom: 6px;

    &:before {
        content: '';
        width: 70px;
        height: 2px;
        background: ${colors.primary};
        position: absolute;
        bottom: 0;
    }
    @media (max-width: 770px) {
        margin: 14px 0;
        margin-left: 0px;
    }
`;

export const ServicesSection = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 50px;
    background-color: ${colors.light};
    padding: 40px;
    padding-bottom: 80px;

    @media (max-width: 770px) {
        padding: 10px;
        padding-top: 40px;
    }
`;

export const StacksTitle = styled.h2`
    margin: 0 -40px;
    padding: 50px;
    background-color: #ddd;
    margin-top: 100px;
    margin-bottom: 40px;
    text-align: center;
    color: ${colors.mediumDark};
    font-size: 40px;

    @media (max-width: 770px) {
        margin: 40px -10px;
        font-size: 30px;
        margin-bottom: 20px;
    }
`;
