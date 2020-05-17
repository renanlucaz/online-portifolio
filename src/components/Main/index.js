import React from 'react';

import {
    MainArea,
    Content,
    Title,
    SubTitle,
    Description,
    ButtonContainer,
    Button,
    OutlineButton,
    ImageContent,
    Image,
    TextArea,
    Down,
    DownLink,
} from './styles';

import perfil from '../../assets/perfil.jpg';

export default function Main() {
    return (
        <MainArea>
            <Content>
                <TextArea>
                    <Title id="main">Renan Nascimento</Title>
                    <SubTitle>FullStack Developer</SubTitle>
                    <Description>
                        Programador na stack NodeJS, ReactJS e React Native.
                        Sempre pronto para adquirir novos conhecimentos e
                        experiências.
                    </Description>
                    <ButtonContainer>
                        <Button>Contratar serviços</Button>
                        <OutlineButton>Portifólio</OutlineButton>
                    </ButtonContainer>
                </TextArea>
                <ImageContent>
                    <Image src={perfil} />
                </ImageContent>
            </Content>
            <DownLink to="about" smooth duration={800} offset={-40}>
                <Down />
            </DownLink>
        </MainArea>
    );
}
