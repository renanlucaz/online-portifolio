import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr;
    grid-template-rows: 80vh 20vh;
    grid-template-areas:
        'header main'
        'header footer';
`;
