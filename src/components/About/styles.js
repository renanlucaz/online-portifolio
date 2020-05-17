import styled from 'styled-components';
import { FaHeart } from 'react-icons/fa';
import colors from '../../styles/colors';
import metrics from '../../styles/metrics';

export const AboutContainer = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin: auto;
    width: 100%;
    max-width: ${metrics.pageWidth};

    @media (max-width: 770px) {
        flex-direction: column-reverse;
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

    span {
        color: ${colors.primary};
    }

    @media (max-width: 770px) {
        margin-top: 10px;
    }
`;

export const AboutImage = styled.img`
    height: 350px;

    @media (max-width: 770px) {
        height: auto;
        width: 100%;
    }
`;

export const Line = styled.hr`
    width: ${(props) => props.size};
    border: 1px solid ${colors.primary};
    margin-top: 7px;
`;

export const TopText = styled.span`
    font-size: 30px;
    margin-top: 40px;
    color: ${colors.lightDark};

    @media (max-width: 770px) {
        margin-top: 20px;
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
`;

export const AboutDescription = styled.p`
    font-size: 17px;
`;

export const InfoContainer = styled.div`
    display: flex;
    margin-top: 25px;

    @media (max-width: 770px) {
        flex-direction: column;
    }
`;

export const Email = styled.span``;

export const Locale = styled.p`
    margin-left: 30px;
    @media (max-width: 770px) {
        margin: 14px 0;
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
