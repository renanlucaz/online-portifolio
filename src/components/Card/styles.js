import styled from 'styled-components';

export const SingleCard = styled.div`
    background-color: #ededed;
    border-radius: 7px;
    max-width: 650px;
    padding: 10px;
    padding-bottom: 30px;
    text-align: center;

    @media (max-width: 770px) {
        div {
            max-width: 300px;
            margin-left: 100px;
        }
    }
`;

export const Subtitle = styled.p`
    color: #ce323a;
    font-weight: bold;
    font-size: 18px;
`;

export const CardTitle = styled.h2`
    color: #0c100c;
    font-size: 35px;
    margin-top: 20px;

    @media (max-width: 770px) {
        margin-top: 10px;
        font-size: 30px;
    }
`;

export const Description = styled.p`
    color: #242824;
    font-size: 18px;
    margin: 5px 80px 25px;

    @media (max-width: 770px) {
        margin: 0px;
        font-size: 16px;
        margin-bottom: 25px;
    }
`;

export const Button = styled.a`
    background-color: #ce323a;
    color: white;
    padding: 10px 180px 10px;
    border-radius: 3px;
    transition: all 0.2s;

    :hover {
        background-color: #c20c1d;
    }

    @media (max-width: 770px) {
        padding: 10px 70px 10px;
    }
`;

export const Image = styled.img`
    width: 100%;
`;
