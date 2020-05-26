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

import perfil from '../../assets/aw.png';

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
                        <Button
                            href="https://shorturl.at/fpOV1"
                            target="_blank"
                        >
                            Contratar serviços
                        </Button>
                        <OutlineButton
                            href="https://shorturl.at/mpN68"
                            target="_blank"
                        >
                            Currículo
                        </OutlineButton>
                    </ButtonContainer>
                </TextArea>
                <ImageContent>
                    <Image src={perfil} alt="Renan Nascimento" />
                </ImageContent>
            </Content>
            <DownLink to="about" smooth duration={800} offset={-120}>
                <Down />
            </DownLink>
        </MainArea>
    );
}
