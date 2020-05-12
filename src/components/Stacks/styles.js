import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex: 1;
    justify-content: space-evenly;
    align-items: center;

    svg {
        color: #ececec;
        font-size: 120px;
        margin: 0px;

        margin-bottom: 15px;
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
        border: 0.7px solid #b7b7b7;
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
    color: #ececec;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
    font-weight: bold;
`;

export const Description = styled.p`
    font-size: 18px;
    text-align: center;
    color: #cecece;
`;
