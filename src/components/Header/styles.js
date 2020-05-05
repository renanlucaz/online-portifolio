import styled from 'styled-components';

export const Header = styled.header`
    background-color: #cecece;
    grid-area: header;
    display: flex;
    justify-content: center;

    ul {
        text-align: center;
        margin-top: 50px;
    }

    ul li {
        margin-bottom: 30px;
    }

    ul li a {
        font-size: 25px;
        color: #525252;
    }
`;
