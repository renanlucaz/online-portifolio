import styled from 'styled-components';

export const ServicesSection = styled.section`
    grid-area: services;
    padding: 20px;
    border-radius: 10% 10% 0 0;

    h1 {
        text-align: center;
        color: white;
        font-size: 40px;
    }

    p {
        text-align: center;
        font-size: 23px;
        margin-top: 15px;
        color: white;
        margin-bottom: 20px;
    }

    div.card-group {
        margin-top: 45px;
        display: flex;
        justify-content: center;
    }

    div.card-group .card {
        background-color: #ededed;
        border-radius: 7px;
        max-width: 300px;
        padding: 10px;
        padding-bottom: 20px;
        text-align: center;
    }

    div.card-group .card + .card {
        margin-left: 30px;
    }

    div.card-group .card h2 {
        color: #0c100c;
    }

    div.card-group .card p {
        color: #242824;
    }

    div.card-group .card a {
        width: 1000px;
        background-color: #ce323a;
        color: white;
        padding: 10px 100px 10px;
        border-radius: 3px;
        transition: all 0.2s;
    }

    div.card-group .card a:hover {
        background-color: #c20c1d;
    }

    div.card-group .card img {
        width: 100%;
    }

    @media (max-width: 770px) {
        h1 {
            font-size: 30px;
        }

        p {
            font-size: 20px;
        }

        div.card-group {
            flex-direction: column;
            align-items: center;
            margin: 0;
            padding: 0;
        }

        div.card-group .card + .card {
            margin-left: 0px;
            margin-top: 15px;
        }
    }
`;
