import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
    display: flex;
    flex-direction: row;

    @media (max-width: 770px) {
        flex-direction: column;
    }
`;

export const ContainerReverse = styled.div`
    display: flex;
    flex-direction: row;

    @media (max-width: 770px) {
        flex-direction: column-reverse;
    }
`;

export const ImageContainer = styled.div`
    max-width: 50%;
    margin-top: 90px;

    img {
        width: 100%;
    }

    @media (max-width: 770px) {
        margin-left: 0px;
        max-width: 100%;
    }
`;

export const Description = styled.div`
    display: flex;
    width: 50%;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-left: 70px;

    @media (max-width: 770px) {
        flex-direction: column;
        margin-left: 0px;
        width: 100%;
        align-items: center;
    }
`;

export const DescriptionReverse = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 50%;
    justify-content: center;
    margin-right: 70px;
    text-align: right;

    @media (max-width: 770px) {
        flex-direction: column;
        margin-right: 0px;
        width: 100%;
        align-items: center;
    }
`;

export const Image = styled.img`
    width: 100%;
    max-width: 100%;
    border-radius: 5px;
`;

export const ImageReverse = styled.img`
    border-radius: 5px;
    @media (max-width: 770px) {
        max-width: 100%;
        margin: auto;
    }
`;

export const ItemType = styled.h3`
    font-size: 20px;
    font-weight: bold;
    color: ${colors.primary};

    @media (max-width: 770px) {
        margin-top: 15px;
        text-align: center;
    }
`;

export const ItemTitle = styled.h2`
    font-size: 35px;
    color: ${colors.light};
    margin: 10px 0px 40px;
    font-weight: bold;

    @media (max-width: 770px) {
        text-align: center;
        font-size: 30px;
        margin: 10px 0px 10px;
    }
`;

export const ItemDesc = styled.p`
    color: ${colors.light};
    font-size: 20px;
    margin-bottom: 100px;

    @media (max-width: 1650px) {
        margin-bottom: 20px;
    }

    @media (max-width: 770px) {
        text-align: center;
        font-size: 16px;
        margin-bottom: 30px;
    }
`;

export const ItemButton = styled.a`
    font-size: 17px;
    font-weight: bold;
    padding: 20px;
    color: ${colors.seccondary};
    cursor: pointer;
    border-radius: 4px;
    border: 1px solid ${colors.seccondary};
    transition: 0.3s;

    :hover {
        background-color: ${colors.seccondary};
        color: ${colors.light};
    }

    @media (max-width: 770px) {
        padding: 18px;
        text-align: center;
        margin: auto;
        width: 90%;
    }
`;
