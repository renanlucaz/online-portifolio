import styled from 'styled-components';
import colors from '../../styles/colors';

export const PageFooter = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 25px;
    background-color: #080808;
    opacity: 0.8;
    grid-area: footer;

    svg {
        box-sizing: content-box;
        color: ${colors.primary};
        padding: 20px;
        margin: 20px 20px;
        background-color: #101010;
        border-radius: 50%;
        transition: 0.2s;
    }

    svg:hover {
        transform: translateY(-2px);
        color: #dd6163;
    }

    p {
        color: white;
        margin-bottom: 10px;
    }

    @media (max-width: 770px) {
        padding: 10px;
        margin-top: 20px;

        svg {
            padding: 10px;
        }
    }
`;
