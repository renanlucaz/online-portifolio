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
`;

export const Presentation = styled.div`
    display: flex;
    width: 50%;
    flex-direction: column;
`;

export const Title = styled.h1`
    font-size: 46px;

    span {
        color: ${colors.primary};
    }
`;

export const AboutImage = styled.img`
    height: 350px;
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
    font-size: 20px;
`;

export const InfoContainer = styled.div`
    display: flex;
    margin-top: 15px;
`;

export const Email = styled.span``;

export const Locale = styled.p`
    margin-left: 30px;
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
    background-color: ${colors.primary};
    margin: 0 -40px;
    padding: 30px;
    margin-top: 100px;
    margin-bottom: 40px;
    text-align: center;
    color: ${colors.light};
    font-size: 40px;

    @media (max-width: 770px) {
        font-size: 30px;
        margin-bottom: 20px;
    }
`;
