import React from 'react';

import {
    SingleCard,
    CardTitle,
    Description,
    Button,
    Image,
    Subtitle,
} from './styles';

function Card({ title, description, img, alt, action, price }) {
    return (
        <SingleCard>
            <Image src={img} alt={alt} />

            <CardTitle>{title}</CardTitle>
            <Subtitle>{price}</Subtitle>
            <Description>{description}</Description>
            <Button
                href={`https://api.whatsapp.com/send?phone=5511996990476&text=Oi,%20me%20interessei%20em%20${action}`}
            >
                Realizar pedido
            </Button>
        </SingleCard>
    );
}

export default Card;
