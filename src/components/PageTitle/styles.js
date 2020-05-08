import styled from 'styled-components';

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
    }
`;
