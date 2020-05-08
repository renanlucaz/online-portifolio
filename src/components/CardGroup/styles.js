import styled from 'styled-components';

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export const GroupCard = styled.div`
    margin-top: 45px;
    justify-content: center;

    @media (max-width: 770px) {
        margin-top: 20px;
    }
`;

export const Slider = styled(Carousel).attrs({
    showStatus: false,
    autoPlay: true,
    interval: 7000,
    useKeyboardArrows: true,
    swipeable: false,
})`
    .slide {
        padding-bottom: 40px;
        background-color: transparent;
        display: flex;
        align-items: center;
    }

    .carousel .control-dots .dot {
        height: 12px;
        width: 12px;
    }
    .carousel .control-dots .dot:active,
    .carousel .control-dots .dot:focus {
        outline: none;
    }
`;
