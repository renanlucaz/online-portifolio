import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr;
    grid-template-rows: auto;
    grid-template-areas:
        'header main'
        'header services'
        'header portifolio'
        'header footer';

    @media (max-width: 1235px) {
        display: flex;
        flex-direction: column;
    }
`;
