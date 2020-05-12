import React from 'react';

import {
    Container,
    Image,
    ItemButton,
    ItemDesc,
    ItemTitle,
    ItemType,
    ImageReverse,
    Description,
    ImageContainer,
    DescriptionReverse,
    ContainerReverse,
} from './styles';

export function PortifolioItem({
    description,
    title,
    text,
    buttonAction,
    image,
}) {
    return (
        <Container>
            <ImageContainer>
                <Image src={image} />
            </ImageContainer>
            <Description>
                <ItemType>{description}</ItemType>
                <ItemTitle>{title}</ItemTitle>
                <ItemDesc>{text}</ItemDesc>
                <ItemButton href={buttonAction}>Detalhes do projeto</ItemButton>
            </Description>
        </Container>
    );
}

export function PortifolioReversed({
    description,
    title,
    text,
    buttonAction,
    image,
}) {
    return (
        <ContainerReverse>
            <DescriptionReverse>
                <ItemType>{description}</ItemType>
                <ItemTitle>{title}</ItemTitle>
                <ItemDesc>{text}</ItemDesc>
                <ItemButton href={buttonAction}>Detalhes do projeto</ItemButton>
            </DescriptionReverse>
            <ImageContainer>
                <ImageReverse src={image} />
            </ImageContainer>
        </ContainerReverse>
    );
}
