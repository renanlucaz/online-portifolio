import styled from 'styled-components';
import { Link } from 'react-scroll';
import { FaChevronDown } from 'react-icons/fa';
import metrics from '../../styles/metrics';
import colors from '../../styles/colors';

export const MainArea = styled.section`
    display: flex;
    flex-direction: column;
    padding: 0 55px;
    flex: 1;
    height: 100vh;
    justify-content: space-between;
    margin: auto;
    align-items: center;

    @media (max-width: 770px) {
        padding: 0 25px;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1;
    width: 100%;
    max-width: ${metrics.pageWidth};
    justify-content: space-between;

    @media (max-width: 770px) {
        flex-direction: column-reverse;
        justify-content: flex-end;
        margin-top: 85px;
    }
`;

export const TextArea = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    z-index: 2;

    flex-direction: column;
    width: 400px;

    @media (max-width: 770px) {
        width: 100%;
        align-items: center;
        text-align: center;
    }
`;

export const ImageContent = styled.div`
    position: absolute;
    z-index: 1;
    right: 0;
    display: flex;
    align-items: center;

    @media (max-width: 770px) {
        top: 0;
        margin: 0 auto;
    }
`;

export const Image = styled.img`
    height: 100vh;

    @media (max-width: 770px) {
        height: 100vh;
    }
`;

export const Title = styled.h1`
    color: white;
    font-size: 35px;

    @media (max-width: 770px) {
        margin-top: 15px;
        font-size: 30px;
    }
`;

export const SubTitle = styled.h2`
    font-weight: 400;
    font-size: 30px;
    color: #ededed;

    @media (max-width: 770px) {
        font-size: 25px;
    }
`;

export const Description = styled.p`
    margin-top: 20px;
    margin-bottom: 40px;
    font-size: 17px;
    color: #a9a9a9;

    @media (max-width: 770px) {
        margin-top: 15px;
        margin-bottom: 30px;
        font-size: 14px;
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
`;

export const Button = styled.a`
    font-weight: bold;
    cursor: pointer;
    padding: 12px;
    border-radius: 25px;
    color: #ededed;
    background-color: ${colors.primary};
    transition: 0.2s;

    :hover {
        background-color: ${colors.seccondary};
    }
`;

export const OutlineButton = styled.a`
    background-color: rgba(0, 0, 0, 0);
    cursor: pointer;
    border: 2px solid ${colors.primary};
    color: ${colors.primary};
    font-weight: bold;
    border-radius: 25px;
    padding: 12px;
    margin-left: 10px;
    transition: 0.2s;

    :hover {
        background-color: ${colors.primary};
        color: white;
    }
`;

export const Down = styled(FaChevronDown)`
    font-size: 45px;
    color: ${colors.seccondary};
    cursor: pointer;
    margin-bottom: 20px;
`;

export const DownLink = styled(Link)`
    position: relative;
    z-index: 2;
`;
